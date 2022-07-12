import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateItem } from "./collectApi";
import { st } from "../../app/firebase";
import AttributeField from "../../components/AttributeField";
import Button from "../../components/Button";
import ImageCard from "../../components/Cards/ImageCard";
import Header from "../../components/Header";
import { selectUser } from "../auth/authSlice";
import { useState } from "react";

function Review() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const category = useSelector((state) => state.collect.category);
  const subcategory = useSelector((state) => state.collect.subcategory);
  const media = useSelector((state) => state.collect.media);
  const attributes = useSelector((state) => state.collect.attributes);
  const user = useSelector(selectUser);
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

  const onSubmit = async () => {
    setLoading(true);
    const urls = await storeImages(media, user);
    createItem.mutate({
      category_id: category.id,
      subcategory_id: subcategory.id,
      attributes: Object.entries(attributes)?.map(([key, value]) => ({
        attribute_id: parseInt(key),
        initial_value: value,
      })),
      media: urls,
    },
    {
      onSuccess: () => {
        navigate("/complete");
      },
      onError: () => {
        navigate("/error");
      },
    });
  };

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Header className="flex flex-1" title={"Review"} pageNumber={"5"} />
        <div className="flex flex-1 p-6 flex-col">
          <div className="flex flex-col h-full">
            {loading ? (
              <>Submitting...</>
            ) : (
              <>
                <div className="flex flex-row mb-4">
                  {media.length > 0 &&
                    media.map((file, index) => (
                      <ImageCard key={index} index={index} media={file.url} />
                    ))}
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Category:</span>{" "}
                    {category.name}
                  </p>
                  <p>
                    <span className="font-semibold">Subcategory:</span>{" "}
                    {subcategory.name}
                  </p>
                  {Object.entries(attributes)?.map(([key, value]) => (
                    <AttributeField key={key} value={value} attributeId={key} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex">
          <Button className="w-full h-16" onClick={onSubmit} disabled={loading}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default Review;
