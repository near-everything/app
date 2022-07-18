import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { st } from "../../app/firebase";
import Button from "../../components/Button";
import ImageCard from "../../components/Cards/ImageCard";
import Header from "../../components/Header";
import { selectUser } from "../auth/authSlice";
import { useCreateItem } from "./collectApi";

function Review() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const media = useSelector((state) => state.collect.media);
  const category = useSelector((state) => state.collect.category);
  const subcategory = useSelector((state) => state.collect.subcategory);
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
    createItem.mutate(
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
          navigate("/complete", { state: { itemId: response.createItem.item.id }});
        },
        onError: () => {
          navigate("/error");
        },
      }
    );
  };

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Header className="flex flex-1" title={"Review"} pageNumber={"3"} />
        <div className="flex flex-1 p-6 flex-col">
          <div className="flex flex-col h-full">
            {loading ? (
              <>Submitting...</>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 py-4 gap-2">
                  {media.length > 0 &&
                    media.map((file, index) => (
                      <ImageCard key={index} index={index} media={file.url} />
                    ))}
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Category:</span>{" "}
                    {category.label}
                  </p>
                  <p>
                    <span className="font-semibold">Subcategory:</span>{" "}
                    {subcategory.label}
                  </p>
                  {attributes?.map((attr) => (
                    <p key={attr.value}>
                      {attr.options?.value !== undefined ? (
                        <>
                          <span className="font-semibold">{attr.label}: </span>
                          <span>{attr.options.label}</span>
                        </>
                      ) : null}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex m-4">
          <Button className="w-full h-16" onClick={onSubmit} disabled={loading}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default Review;
