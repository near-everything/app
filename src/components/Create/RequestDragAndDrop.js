import ImageIcon from "../../icons/image";

function RequestDragAndDrop({ media, setMedia }) {
  return (
    <>
      <label
        className="flex flex-col justify-center border-2  cursor-pointer rounded-2xl hover:border-green-300 h-full p-4 w-full mb-16"
        onChange={(event) => {
          if (event.target.files.length > 0) {
            const urls = Array.from(event.target.files).map((file) => ({
              data: file,
              url: URL.createObjectURL(file),
            }));
            setMedia([...media, ...urls]);
            event.target.value = null;
          }
        }}
      >
        <div className="flex flex-col items-center pt-6">
          <ImageIcon />
          <div className="flex flex-col text-sm text-center text-gray-400">
            <span className="font-semibold">add photos</span>
            <span className="">or drag and drop</span>
          </div>
        </div>
        <input type="file" accept="image/*" className="opacity-0" multiple />
      </label>
    </>
  );
}

export default RequestDragAndDrop;
