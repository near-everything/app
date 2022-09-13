import { useState } from "react";
import Select from "react-select";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import Media from "../../../components/Create/Media";

import CreateSuccessNotification from "../../../components/Notification/CreateSuccessNotification";
import Description from "../../../components/Request/Description";
import Layout from "../../../containers/Layout";
import PageContentContainer from "../../../containers/PageContentContainer";
import { useAuth } from "../../../context/AuthContext";
import {
  useCreateMedia,
  useCreatePost,
} from "../../../features/collect/collectApi";

// export const getServerSideProps = withPageAuthRequired();

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

function CreatePost() {
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState([]);
  const [text, setText] = useState("");
  const [privacy, setPrivacy] = useState(privacyOptions[0]);
  const { user } = useAuth();
  const createPost = useCreatePost();
  const createMedia = useCreateMedia();
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

  const associateMedia = async (postId) => {
    const urls = await storeImages(media, user);
    for (const url of urls) {
      createMedia.mutate({
        mediaUrl: url,
        postId,
      });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    createPost.mutate(
      {
        posterId: user.uid,
        privacyType: privacy.value,
      },
      {
        onSuccess: async (response) => {
          toast.success(
            <CreateSuccessNotification
              type={"Post"}
              color={"blue"}
              href={`/posts/${response.createPost.post.id}`}
              id={response.createPost.post.id}
            />
          );
          await associateMedia(response.createPost.post.id);
          setMedia([]);
          setText("");
          setLoading(false);
        },
        onError: () => {
          toast.error("Error creating post, please try again.");
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
            <Media media={media} setMedia={setMedia} />
            <div className="mx-4">
              <Description description={text} setDescription={setText} />
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

export default CreatePost;

CreatePost.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
