import Link from "next/link";
import { useState } from "react";
import Button from "../../components/Button";
import Media from "../../components/Media";
import Description from "../../components/Request/Description";
import ReferenceLink from "../../components/Request/ReferenceLink";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";
import { useAuth } from "../../context/AuthContext";
import { useCreateItem } from "../../features/collect/collectApi";

function Request() {
  const [loading, setLoading] = useState(false);
  const [referenceLink, setReferenceLink] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState([]);
  const { user } = useAuth();
  const createItem = useCreateItem();

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
    // const urls = await storeImages(media, user);
    // createItem.mutate(
    //   {
    //     media: urls,
    //     ownerId: user.uid,
    //   },
    //   {
    //     onSuccess: (response) => {
    //       console.log(`success ${response.createItem.item.id}`);
    //       // navigate("/complete", {
    //       //   state: { itemId: response.createItem.item.id },
    //       // });
    //       setCategory("");
    //       setSubcategory("");
    //       setAttributes([]);
    //       setMedia([]);
    //       setLoading(false);
    //     },
    //     onError: () => {
    //       console.log("error");
    //       setLoading(false);
    //       // navigate("/error");
    //     },
    //   }
    // );
  };

  return (
    <>
      <div className="flex flex-1 flex-col">
        <Media media={media} setMedia={setMedia} />
        <br />
        <div className="flex flex-col text-black">
          <div className="w-75 border-t-2 flex justify-end text-sm text-gray-400 pb-2">
            Optional
          </div>
          <ReferenceLink
            referenceLink={referenceLink}
            setReferenceLink={setReferenceLink}
          />
          <br />
          <Description
            description={description}
            setDescription={setDescription}
          />
        </div>
      </div>
      <div className="flex justify-self-end">
        <Link href="/review">
          <Button
            className="w-full h-16"
            disabled={media.length <= 0}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Link>
      </div>
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
