import Input from "../Input";

function ReferenceLink({ referenceLink, setReferenceLink }) {
  const handleOnChange = (event) => {
    setReferenceLink(event.target.value);
  };

  return (
    <>
      <Input
        placeholder="Reference link... https://..."
        onChange={handleOnChange}
        value={referenceLink}
      />
    </>
  );
}

export default ReferenceLink;
