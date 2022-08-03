import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { parseCookies } from "nookies";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import getFirebaseAdmin from "../../app/firebaseAdmin";
import { getFirebaseStorage } from "../../app/firebaseClient";
import Button from "../../components/Button";
import Media from "../../components/Media";
import Description from "../../components/Request/Description";
import ReferenceLink from "../../components/Request/ReferenceLink";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";
import { useAuth } from "../../context/AuthContext";
import { useCreateRequest } from "../../features/request/requestApi";


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

function Request() {
  const [loading, setLoading] = useState(false);
  const [urlError, setUrlError]  = useState(false);
  const [referenceLink, setReferenceLink] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState([]);
  const { user } = useAuth();
  const createRequest = useCreateRequest();
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

  const validateLink = (link) =>{
    if(link.indexOf("https://")==0){
      return true;
    }
	  return false;
  }

  const handleSubmit = async () => {
    setUrlError(false);
    setLoading(true);
    const validUrl = validateLink(referenceLink);
    if(!validUrl){
      setUrlError(true);
      setLoading(false);
      return;
    }
    const urls = await storeImages(media, user);

    createRequest.mutate(
      {
        media: urls,
        referenceLink: referenceLink,
        description: description,
        requesterId: user.uid,
      },
      {
        onSuccess: (response) => {
          console.log(`success ${response.createRequest.request.id}`);
          setMedia([]);
          setReferenceLink("");
          setDescription("");
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
          <Media media={media} setMedia={setMedia} />
          <br />
          <div className="flex flex-col flex-1 text-black">
            <div className="w-75 border-t-2 flex justify-end text-sm text-gray-400 pb-2">
              Optional
            </div>
            <ReferenceLink
              referenceLink={referenceLink}
              setReferenceLink={setReferenceLink}
            />
            {urlError && 
              <div class="p-4 mt-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                <span class="font-medium"></span> Links must be secured and should start with https://
              </div>
            }
            <br />
            <Description
              description={description}
              setDescription={setDescription}
            />
          </div>
          <div className="flex justify-self-end">
            <Button
              className="w-full h-16"
              disabled={media.length <= 0}
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

export default Request;

Request.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"request"} moduleColor={"red"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
