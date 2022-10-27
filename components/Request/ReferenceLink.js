import Input from "../Input";

function ReferenceLink({ referenceLink, setReferenceLink, setUrlError, urlError }) {
  const handleOnChange = (event) => {
    setUrlError(false);
    setReferenceLink(event.target.value);
  };

  return (
    <>
      <Input
        placeholder="Reference link... https://..."
        onChange={handleOnChange}
        value={referenceLink}
        valid={!urlError}
      />
      {urlError && (
        <div
          className="p-4 mt-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          {"Links must be secure and start with 'https://'."}
        </div>
      )}
    </>
  );
}

export default ReferenceLink;
