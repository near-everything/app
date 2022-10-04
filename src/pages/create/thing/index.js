import { useUser } from "@auth0/nextjs-auth0";
import { Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import Select from "react-select";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import { getFirebaseStorage } from "../../../app/firebaseClient";
import Attributes from "../../../components/Collect/Attributes";
import Media from "../../../components/Create/Media";

import CreateSuccessNotification from "../../../components/Notification/CreateSuccessNotification";
import Layout from "../../../containers/Layout";
import PageContentContainer from "../../../containers/PageContentContainer";
import {
  useCreateMedia,
  useCreateThing
} from "../../../features/collect/collectApi";

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

function CreateThing() {
  const [loading, setLoading] = useState(false);
  const [attributes, setAttributes] = useState([]);
  const [media, setMedia] = useState([]);
  const [privacy, setPrivacy] = useState(privacyOptions[0]);
  const { user } = useUser();
  const createThing = useCreateThing();
  // const createMedia = useCreateMedia();
  const st = getFirebaseStorage();

  // const storeImages = async (media) => {
  //   let urls = [];
  //   for (const img of media) {
  //     const storageRef = ref(st, `images/${Timestamp.now()}`);
  //     const snapshot = await uploadBytes(storageRef, img.data);
  //     const downloadURL = await getDownloadURL(snapshot.ref);
  //     urls.push(downloadURL);
  //   }
  //   return urls;
  // };

  // const associateMedia = async (thingId) => {
  //   const urls = await storeImages(media, user);
  //   for (const url of urls) {
  //     createMedia.mutate({
  //       mediaUrl: url,
  //       thingId,
  //     });
  //   }
  // };

  const handleSubmit = async () => {
    setLoading(true);
    let lat;
    let long;
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
    });
    createThing.mutate(
      {
        attributes: attributes
          ?.filter((it) => it.options?.value !== undefined && it.options?.value !== null)
          .map((attr) => {
            return {
              attributeId: parseInt(attr.value),
              optionId: attr.options.value,
            };
          }),
        ownerId: user.sub,
        geomPoint:
          lat && long ? { type: "Point", coordinates: [lat, long] } : null,
        privacyType: privacy.value,
      },
      {
        onSuccess: async (response) => {
          toast.success(
            <CreateSuccessNotification
              type={"Thing"}
              color={"green"}
              href={`/things/${response.createThing.thing.id}`}
              id={response.createThing.thing.id}
            />
          );
          // await associateMedia(response.createThing.thing.id);
          // setAttributes([]);
          // setMedia([]);
          setLoading(false);
        },
        onError: (err) => {
          toast.error("Error creating thing, please try again.");
          console.log(err.message);
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
          </PageContentContainer>
          <div className="absolute right-0 bottom-16 p-4">
            <button
              className={`btn btn-primary btn-lg ${
                media.length < 0 ? "hidden" : ""
              }`}
              // disabled={media.length <= 0}
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

export default CreateThing;

CreateThing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
