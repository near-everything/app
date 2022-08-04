import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { parseCookies } from "nookies";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import getFirebaseAdmin from "../../app/firebaseAdmin";
import { getFirebaseStorage } from "../../app/firebaseClient";
import Button from "../../components/Button";
import Attributes from "../../components/Collect/Attributes";
import Category from "../../components/Collect/Category";
import Subcategory from "../../components/Collect/Subcategory";
import Media from "../../components/Media";
import CreateSuccessNotification from "../../components/Notification/CreateSuccessNotification";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";
import { useAuth } from "../../context/AuthContext";
import { useCreateThing } from "../../features/collect/collectApi";

export const getServerSideProps = async (ctx) => {
  try {
    const admin = getFirebaseAdmin();
    const cookies = parseCookies(ctx);
    await admin.auth().verifyIdToken(cookies.__session);

    return {
      props: {},
    };
  } catch (err) {
    // either the `__session` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
};

function Collect({ props }) {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [media, setMedia] = useState([]);
  const { user } = useAuth();
  const createThing = useCreateThing();
  const st = getFirebaseStorage();

  const storeImages = async (media, user) => {
    let urls = [];
    for (const img of media) {
      const storageRef = ref(st, `images/${user.uid}/${Timestamp.now()}`);
      const snapshot = await uploadBytes(storageRef, img.data);
      const downloadURL = await getDownloadURL(snapshot.ref);
      urls.push(downloadURL);
    }
    return urls;
  };

  const handleSubmit = async () => {
    setLoading(true);
    let lat;
    let long;
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
    });
    const urls = await storeImages(media, user);
    createThing.mutate(
      {
        categoryId: category.value,
        subcategoryId: subcategory.value,
        attributes: attributes
          ?.filter((it) => it.options.value !== undefined)
          .map((attr) => {
            return {
              attributeId: parseInt(attr.value),
              optionId: attr.options.value,
            };
          }),
        media: urls,
        ownerId: user.uid,
        geomPoint:
          lat && long ? { type: "Point", coordinates: [lat, long] } : null,
      },
      {
        onSuccess: (response) => {
          toast.success(
            <CreateSuccessNotification
              type={"Thing"}
              href={`/things/${response.createThing.thing.id}`}
              id={response.createThing.thing.id}
            />
          );
          setCategory("");
          setSubcategory("");
          setAttributes([]);
          setMedia([]);
          setLoading(false);
        },
        onError: () => {
          console.log("error");
          setLoading(false);
        },
      }
    );
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <PulseLoader
            size={10}
            color={"#e5e7eb"}
            loading={loading}
            speedMultiplier={1.5}
          />
        </div>
      ) : (
        <div className="flex flex-1 flex-col">
          <p>{props?.message}</p>
          <Media media={media} setMedia={setMedia} />
          <br />
          <div className="flex flex-1 flex-col text-black">
            <Category
              category={category}
              setCategory={setCategory}
              setSubcategory={setSubcategory}
            />
            <br />
            {category ? (
              <Subcategory
                category={category}
                subcategory={subcategory}
                setSubcategory={setSubcategory}
              />
            ) : null}
            <br />
            {subcategory ? (
              <>
                <div className="w-75 border-t-2 flex justify-end text-sm text-gray-400 pb-2">
                  Optional
                </div>
                <Attributes
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              </>
            ) : null}
          </div>
          <div className="flex justify-self-end">
            <Button
              className="w-full h-16"
              disabled={!category || !subcategory || media.length <= 0}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Collect;

Collect.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"collect"} moduleColor={"green"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
