import { useState } from "react";
import { useCreateConcern } from "../../features/feedback/feedbackApi";
import Button from "../Button";
import TextArea from "../TextArea";

function Concern() {
  const [concern, setConcern] = useState("");
  const createConcern = useCreateConcern();

  const handleOnChange = (event) => {
    setConcern(event.target.value);
  };

  const handleSubmit = () => {
    createConcern.mutate(
      {
        description: concern,
      },
      {
        onSuccess: (response) => {
          console.log(`success ${response.createConcern.concern.id}`);
          setConcern("");
        },
        onError: () => {
          console.log("error");
        },
      }
    );
  };

  return (
    <>
      <span>Have a concern?</span>
      <TextArea
        name="feedback_concern"
        placeholder="What's your concern?"
        onChange={handleOnChange}
        value={concern}
      />
      {/* <Button
        onClick={handleSubmit}
        className="w-full h-16"
        disabled={concern === ""}
      >
        Submit
      </Button> */}
    </>
  );
}

export default Concern;
