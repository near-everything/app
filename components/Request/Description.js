import TextArea from "../TextArea";

function Description({ description, setDescription }) {
  const handleOnChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <TextArea
        name="request_description"
        placeholder="Description..."
        onChange={handleOnChange}
        value={description}
      />
    </>
  );
}

export default Description;
