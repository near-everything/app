import { useState } from "react";
import Camera from "../../../components/Camera";
import CreateThingForm from "../../../components/Create/CreateThingForm";

import Layout from "../../../containers/Layout";

function CreateThing() {
  const [showCamera, setShowCamera] = useState(false);
  const [images, setImages] = useState([]);
  const [attributes, setAttributes] = useState([]);

  return (
    <>
      {showCamera ? (
        <div className="flex flex-col h-full">
          <Camera
            hideCamera={() => setShowCamera(false)}
            images={images}
            setImages={setImages}
          />
        </div>
      ) : (
        <>
          <CreateThingForm
            showCamera={() => setShowCamera(true)}
            images={images}
            setImages={setImages}
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </>
      )}
    </>
  );
}

export default CreateThing;

CreateThing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
