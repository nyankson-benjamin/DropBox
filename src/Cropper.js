import React, { useState } from "react";
import { CropperRef, Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";

export const Crop = () => {
  const [image] = useState(
    "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRYT8u3wI9a6gaceV_KUz_4LyVnTep01eLQa3xBOSBl-uBjA54InsDoUIZBiim-VGpQv2ad2OTZQ5hDa6U"
  );

  const onChange = (cropper) => {
    console.log(cropper.getCoordinates(), cropper.getCanvas());
  };

  return <Cropper src={image} onChange={onChange} className={"cropper"} />;
};

export default Crop;
