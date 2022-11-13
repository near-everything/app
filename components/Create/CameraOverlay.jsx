import {
  faArrowUpFromBracket,
  faRotate
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const imagePositions = [
  "left-1",
  "left-3",
  "left-5",
  "left-7",
  "left-9",
  "left-11",
];

function CameraOverlay({swapFacingMode, capture, hideCamera, images}) {
  return (
    <div className="relative h-full">
      <div className="w-full absolute bottom-16">
        <div className="flex flex-row justify-center">
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={swapFacingMode}
          >
            <FontAwesomeIcon size="xl" icon={faRotate} />
          </div>
          <div className="flex justify-center items-center w-1/3">
            <button
              className="w-16 h-16 rounded-full border-primary active:bg-primary border-4 disabled:bg-primary"
              onClick={capture}
              disabled={images.length > 5}
            ></button>
          </div>
          <div
            className="flex justify-center items-center relative w-6"
            onClick={hideCamera}
          >
            {images.length > 0 ? (
              <div className="relative w-full h-full cursor-pointer">
                {images.map((imgSrc, index) => (
                  <div
                    className={`absolute ${imagePositions[index]}`}
                    key={index}
                  >
                    <div className={"w-16 h-16"}>
                      <Image
                        src={imgSrc.url}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="shadow-xl rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="cursor-pointer">
                <FontAwesomeIcon size="xl" icon={faArrowUpFromBracket} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CameraOverlay;
