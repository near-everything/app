import Image from "next/image";
import { useRef, useState } from "react";
import { EffectCards, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Description from "../Collect/Attributes";
import MediaUpload from "../MediaUpload";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const privacyOptions = [
  {
    label: "Private",
    value: "PRIVATE",
  },
  {
    label: "Public",
    value: "PUBLIC",
  },
];

function MediaSlide({ imgSrc, removeMedia }) {
  return (
    <div className="relative w-full h-full">
      { removeMedia ? (
      <div className="absolute z-50 left-2 top-2">
        <button
          className="btn btn-ghost btn-circle bg-white text-gray-800 opacity-20 shadow-lg"
          onClick={removeMedia}
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
      </div>) : (null)}
      <Image src={imgSrc} alt="" layout="fill" objectFit="cover" />
    </div>
  );
}

function CreateThingForm({
  showCamera,
  images,
  setImages,
  attributes,
  setAttributes,
}) {
  const [privacy, setPrivacy] = useState("PRIVATE");

  const removeMedia = (index) => {
    setImages((old) => {
      return old.filter((value, i) => i !== index);
    });
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"> </div>';
    },
  };

  return (
    <>
        <div
          className="flex flex-col justify-center items-center w-full relative"
          id="media-reel"
        >
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
          >
            {images?.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <MediaSlide
                  imgSrc={imgSrc}
                  removeMedia={() => removeMedia(index)}
                />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <MediaUpload
                onUpload={(event) => {
                  if (event.target.files.length > 0) {
                    const urls = Array.from(event.target.files).map((file) =>
                      URL.createObjectURL(file)
                    );
                    setImages([...images, ...urls]);
                    event.target.value = null;
                  }
                }}
              />
            </SwiperSlide>
          </Swiper>
          <div className="absolute bottom-0 left-2 z-50">
            <div className="flex justify-center items-center h-16">
              <button
                className="btn btn-primary text-gray-200 shadow-lg"
                onClick={showCamera}
              >
                <FontAwesomeIcon size="xl" icon={faCamera} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <div className="flex flex-1 flex-col">
            <Description
              attributes={attributes}
              setAttributes={setAttributes}
            />
          </div>
        </div>
      {/* 
      <Select
        id="privacy_select"
        className="basic-single text-black"
        classNamePrefix={"select"}
        defaultValue={privacy}
        name="type"
        options={privacyOptions}
        onChange={setPrivacy}
        placeholder="Privacy setting"
      /> */}
    </>
  );
}

export default CreateThingForm;
