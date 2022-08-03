import { useState } from "react";
import { useCreateQuestion } from "../../features/feedback/feedbackApi";
import Button from "../Button";
import TextArea from "../TextArea";

function Question() {
  const [question, setQuestion] = useState("");
  const createQuestion = useCreateQuestion();

  const handleOnChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    createQuestion.mutate(
      {
        description: question,
      },
      {
        onSuccess: (response) => {
          console.log(`success ${response.createQuestion.question.id}`);
          setQuestion("");
        },
        onError: () => {
          console.log("error");
        },
      }
    );
  };

  return (
    <>
      <span>Have a question?</span>
      <div className="flex flex-row gap-2">
        <TextArea
          name="feedback_question"
          placeholder="What's your question?"
          onChange={handleOnChange}
          value={question}
        />
        <Button
          onClick={handleSubmit}
          className="w-1/4 h-16"
          disabled={question.length < 10}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default Question;
