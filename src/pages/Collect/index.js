import { getAuth } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { st } from "../../app/firebase";
import Button from "../../components/Button";
import Attributes from "../../components/Collect/Attributes";
import Category from "../../components/Collect/Category";
import Subcategory from "../../components/Collect/Subcategory";
import Media from "../../components/Media";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";
import { useAuth } from "../../context/AuthContext";
import { useCreateThing } from "../../features/collect/collectApi";

export const getServerSideProps = async (ctx) => {
  try {
    const auth = getAuth();
    // const cookies = nookies.get(ctx);
    // console.log(JSON.stringify(cookies, null, 2));
    console.log("did it");
    // const token = await auth.verifyIdToken(cookies.token);
    // const { uid, email } = token;

    // the user is authenticated!
    // FETCH STUFF HERE

    return {
      props: { message: "Nice" },
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      // `as never` is required for correct type inference
      // by InferGetServerSidePropsType below
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
      },
      {
        onSuccess: (response) => {
          console.log(`success ${response.createThing.item.id}`);
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
