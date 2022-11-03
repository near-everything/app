import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MediaUpload from "../MediaUpload";
import MediaSlide from "./MediaSlide";

function MediaReel({ images, setImages, allowUpload, allowRemove }) {
  const removeMedia = (index) => {
    setImages((old) => {
      return old.filter((value, i) => i !== index);
    });
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className}"> </div>`;
    },
  };

  const addMedia = (event) => {
    if (event.target.files.length > 0) {
      const urls = Array.from(event.target.files).map((file) => ({
        data: file,
        url: URL.createObjectURL(file),
      }));
      setImages([...images, ...urls]);
      event.target.value = null;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="rounded-2xl"
      >
        {images?.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <MediaSlide
              imgSrc={imgSrc?.url || imgSrc}
              removeMedia={() => removeMedia(index)}
              allowRemove={allowRemove}
            />
          </SwiperSlide>
        ))}
        {allowUpload ? (
          <SwiperSlide>
            <MediaUpload onUpload={addMedia} />
          </SwiperSlide>
        ) : images?.length === 0 ? (
          <>
            <SwiperSlide>
              <div className="flex flex-col items-center pt-6">
                <div className="flex flex-col text-sm text-center text-gray-400">
                  <span className="font-semibold">no images found</span>
                  <span className="">please edit and upload images</span>
                </div>
              </div>
            </SwiperSlide>
          </>
        ) : null}
      </Swiper>
    </div>
  );
}

export default MediaReel;
