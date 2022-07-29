import { useState } from "react";
import { useCreateIdea } from "../../features/feedback/feedbackApi";
import Button from "../Button";
import TextArea from "../TextArea";

function Idea() {
  const [idea, setIdea] = useState("");
  const createIdea = useCreateIdea();

  const handleOnChange = (event) => {
    setIdea(event.target.value);
  };

  const handleSubmit = () => {
    createIdea.mutate(
      {
        description: idea,
      },
      {
        onSuccess: (response) => {
          console.log(`success ${response.createIdea.idea.id}`);
          setIdea("");
        },
        onError: () => {
          console.log("error");
        },
      }
    );
  };

  return (
    <>
      <span>Have an idea?</span>
      <TextArea
        name="feedback_idea"
        placeholder="What's your idea?"
        onChange={handleOnChange}
        value={idea}
      />
      {/* <Button
        onClick={handleSubmit}
        className="w-full h-16"
        disabled={idea === ""}
      >
        Submit
      </Button> */}
    </>
  );
}

export default Idea;
