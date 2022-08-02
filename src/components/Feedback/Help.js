import { useState } from "react";
import { useCreateHelp } from "../../features/feedback/feedbackApi";
import Button from "../Button";
import TextArea from "../TextArea";

function Help() {
  const [help, setHelp] = useState("");
  const createHelp = useCreateHelp();

  const handleOnChange = (event) => {
    setHelp(event.target.value);
  };

  const handleSubmit = () => {
    createHelp.mutate(
      {
        description: help,
      },
      {
        onSuccess: (response) => {
          console.log(`success ${response.createHelp.help.id}`);
          setHelp("");
        },
        onError: () => {
          console.log("error");
        },
      }
    );
  };

  return (
    <>
      <span>Want to help?</span>
      <div className="flex flex-row gap-2">
        <TextArea
          name="feedback_help"
          placeholder="How can you help?"
          onChange={handleOnChange}
          value={help}
        />
        <Button
          onClick={handleSubmit}
          className="w-1/4 h-16"
          disabled={help.length < 10}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default Help;
