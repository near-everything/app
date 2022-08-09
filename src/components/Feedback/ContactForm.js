import { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useCreateFeedback } from "../../features/feedback/feedbackApi";
import Button from "../Button";
import TextArea from "../TextArea";

const typeOptions = [
  {
    label: "I have a question",
    value: "QUESTION",
  },
  {
    label: "I have a concern",
    value: "CONCERN",
  },
  {
    label: "I have an idea",
    value: "IDEA",
  },
  {
    label: "Offer to help",
    value: "HELP",
  },
  {
    label: "Other...",
    value: "OTHER",
  },
];

function ContactForm() {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuth();
  const createFeedback = useCreateFeedback();

  const handleSubmit = () => {
    createFeedback.mutate(
      {
        type: type.value,
        description: description,
        userId: user.uid,
      },
      {
        onSuccess: () => {
          toast.success("Feedback successfully submitted. Thank you!");
          setDescription("");
          setType({});
        },
        onError: () => {
          toast.error("Error submitting feedback.");
        },
      }
    );
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-2xl">Contact us</span>
        <Select
          id="feedback_select"
          className="basic-single text-black"
          classNamePrefix={"select"}
          defaultValue={type}
          name="type"
          options={typeOptions}
          onChange={setType}
          placeholder="Reason for contact..."
        />
        <TextArea
          name="feedback_question"
          className="h-32"
          placeholder=""
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          disabled={type === ""}
        />
        <Button
          className="w-full h-16"
          onClick={handleSubmit}
          disabled={description === "" || type === ""}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default ContactForm;
