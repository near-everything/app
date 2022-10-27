import SquareImage from "./SquareImage";

function RemoveableMedia({ media, index, removeMedia, featureMedia }) {
  return (
    <>
      <div className="relative z-50 float-right m-2">
        <button
          className="btn btn-circle btn-outline"
          onClick={() => removeMedia(index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div onClick={() => featureMedia && featureMedia(index)}>
        <SquareImage media={media} />
      </div>
    </>
  );
}

export default RemoveableMedia;
