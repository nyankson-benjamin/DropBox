import React, { useRef } from "react";
import Cropper from "react-cropper";

function Cropper2() {
  const cropper = useRef(null);

  const crop = () => {
    console.log(cropper.current.getCroppedCanvas().toDataURL());
  };

  return (
    <Cropper
      ref={cropper}
      src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRYT8u3wI9a6gaceV_KUz_4LyVnTep01eLQa3xBOSBl-uBjA54InsDoUIZBiim-VGpQv2ad2OTZQ5hDa6U"
      style={{ height: 400, width: "100%" }}
      crop={crop}
    />
  );
}
export default Cropper2;
