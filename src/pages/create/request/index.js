import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { parseCookies } from "nookies";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import getFirebaseAdmin from "../../../app/firebaseAdmin";
import { getFirebaseStorage } from "../../../app/firebaseClient";
import CreateHeader from "../../../components/Create/CreateHeader";
import Media from "../../../components/Media";
import MediaUpload from "../../../components/MediaUpload";
import CreateSuccessNotification from "../../../components/Notification/CreateSuccessNotification";
import Description from "../../../components/Request/Description";
import ReferenceLink from "../../../components/Request/ReferenceLink";
import Layout from "../../../containers/Layout";
import PageContentContainer from "../../../containers/PageContentContainer";
import { useAuth } from "../../../context/AuthContext";
import { useCreateRequest } from "../../../features/request/requestApi";

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
  const [urlError, setUrlError] = useState(false);
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

  const validateLink = (link) => {
    if (link === "" || link.indexOf("https://") == 0) {
      return true;
    }
    return false;
  };

  const handleSubmit = async () => {
    setUrlError(false);
    setLoading(true);
    const validUrl = validateLink(referenceLink);
    if (!validUrl) {
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
          toast.success(
            <CreateSuccessNotification
              type={"Request"}
              color={"red"}
              href={`/requests/${response.createRequest.request.id}`}
              id={response.createRequest.request.id}
            />
          );
          setMedia([]);
          setReferenceLink("");
          setDescription("");
          setLoading(false);
        },
        onError: () => {
          toast.error("Error creating request, please try again.");
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
        <>
          <CreateHeader
            disabled={media.length <= 0}
            handleSubmit={handleSubmit}
          >
            <p className={"font-semibold text-red-600"}>new request</p>
          </CreateHeader>
          <PageContentContainer>
            <MediaUpload />
            {/* This needs to be fixed, add 4+ attributes and it gets hidden */}
            <div className="h-96"> 
              <div className="collapse collapse-arrow border border-base-300 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title">Advanced</div>
                <div className="collapse-content">
                  <ReferenceLink
                    referenceLink={referenceLink}
                    setReferenceLink={setReferenceLink}
                    setUrlError={setUrlError}
                    urlError={urlError}
                  />
                  <br />
                  <Description
                    description={description}
                    setDescription={setDescription}
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

export default Request;

Request.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
