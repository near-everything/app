import { useState } from "react";
import Camera from "../../../components/Camera";
import CreateThingForm from "../../../components/Create/CreateThingForm";

import Layout from "../../../containers/Layout";

function CreateThing() {
  const [showCamera, setShowCamera] = useState(false);
  const [images, setImages] = useState([]);

  return (
    <>
      {showCamera ? (
        <Camera
          hideCamera={() => setShowCamera(false)}
          images={images}
          setImages={setImages}
        />
      ) : (
        <>
          <CreateThingForm />
          <button className="btn" onClick={() => setShowCamera(true)} />
        </>
      )}
    </>
  );
}

export default CreateThing;

CreateThing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
