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
      return '<div class="' + className + '"> </div>';
    },
  };

  const addMedia = (event) => {
    if (event.target.files.length > 0) {
      const urls = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
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
              imgSrc={imgSrc}
              removeMedia={() => removeMedia(index)}
              allowRemove={allowRemove}
            />
          </SwiperSlide>
        ))}
        {allowUpload ? (
          <SwiperSlide>
            <MediaUpload onUpload={addMedia} />
          </SwiperSlide>
        ) : null}
      </Swiper>
    </div>
  );
}

export default MediaReel;
