import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { parseCookies } from "nookies";
import { useState } from "react";
import Select from "react-select";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import getFirebaseAdmin from "../../../app/firebaseAdmin";
import { getFirebaseStorage } from "../../../app/firebaseClient";
import Attributes from "../../../components/Collect/Attributes";
import CreateHeader from "../../../components/Create/CreateHeader";
import Media from "../../../components/Create/Media";
import CreateSuccessNotification from "../../../components/Notification/CreateSuccessNotification";
import Layout from "../../../containers/Layout";
import PageContentContainer from "../../../containers/PageContentContainer";
import { useAuth } from "../../../context/AuthContext";
import { useCreateThing } from "../../../features/collect/collectApi";

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

const privacyOptions = [
  {
    label: "Private",
    value: "PRIVATE",
  },
  {
    label: "Public",
    value: "PUBLIC",
  },
];

function Collect() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [media, setMedia] = useState([]);
  const [privacy, setPrivacy] = useState(privacyOptions[0]);
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
        privacyType: privacy.value,
      },
      {
        onSuccess: (response) => {
          toast.success(
            <CreateSuccessNotification
              type={"Thing"}
              color={"green"}
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
          toast.error("Error creating thing, please try again.");
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
        <>
          <CreateHeader
            disabled={media.length <= 0}
            handleSubmit={handleSubmit}
          >
            <p className={"font-semibold text-green-600"}>new thing</p>
          </CreateHeader>
          <PageContentContainer>
            <Media media={media} setMedia={setMedia} />
            <div className="h-auto pb-48 overflow-y-visible">
              <div className="collapse collapse-arrow border border-base-300 rounded-box overflow-y-visible">
                <input type="checkbox" defaultChecked={true} />
                <div className="collapse-title">Advanced</div>
                <div className="collapse-content overflow-y-visible">
                  <Attributes
                    attributes={attributes}
                    setAttributes={setAttributes}
                  />
                  <Select
                    id="privacy_select"
                    className="basic-single text-black"
                    classNamePrefix={"select"}
                    defaultValue={privacy}
                    name="type"
                    options={privacyOptions}
                    onChange={setPrivacy}
                    placeholder="Privacy setting"
                  />
                </div>
              </div>
            </div>
          </PageContentContainer>
        </>
      )}
    </>
  );
}

export default Collect;

Collect.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
