import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import getFirebaseAdmin from "../../../app/firebaseAdmin";
import { getFirebaseStorage } from "../../../app/firebaseClient";
import Media from "../../../components/Create/Media";
import RequestDragAndDrop from "../../../components/Create/RequestDragAndDrop";
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

function CreateRequest() {
  const [loading, setLoading] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const [referenceLink, setReferenceLink] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState([]);
  const { user } = useAuth();
  const createRequest = useCreateRequest();
  const st = getFirebaseStorage();
  const [files, setFiles] = useState([...media]);

  useEffect(() => {
    return setMedia(files);
  }, [files, setMedia]);

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
          <PageContentContainer>
            {media.length > 0 ? (
              <>
                <Media media={media} setMedia={setMedia} />
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
              </>
            ) : (
              <>
                <RequestDragAndDrop media={files} setMedia={setFiles} />
              </>
            )}
          </PageContentContainer>
          <div className="absolute right-0 bottom-16 p-4">
            <button
              className={`btn btn-primary btn-lg ${
                media.length <= 0 ? "hidden" : ""
              }`}
              disabled={media.length <= 0}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default CreateRequest;

CreateRequest.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
