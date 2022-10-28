import { useState } from "react";
import Select from "react-select";
import Attributes from "../Collect/Attributes";

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

function CreateThingForm() {
  const [privacy, setPrivacy] = useState("PRIVATE");
  const [attributes, setAttributes] = useState([]);

  return (
    <>
      <Attributes attributes={attributes} setAttributes={setAttributes} />
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
    </>
  );
}

export default CreateThingForm;
