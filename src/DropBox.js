import React, { useState } from "react";
import DropboxChooser from "react-dropbox-chooser";

function DropBox() {
  const [imgLink, setImgLink] = useState();
  const [imgError, setImgError] = useState();
  const myRegex = /(https?:\/\/.*\.(?:png|jpg))/i;

  //dropkey
  const drop = {
    appKey: process.env.REACT_APP_APPKEY,
  };

  const handleSuccess = (files) => {
    const imageUrl = files[0].link;
    const link = imageUrl.slice(0, -5) + "?raw=1";
    // setImgLink(link);
    if (!link.match(myRegex)) {
      setImgError("Please select images only");
      setImgLink(null);
    } else {
      setImgLink(link);
      setImgError("");
    }
  };
  return (
    <div>
      <DropboxChooser
        appKey={drop.appKey}
        multiselect={false}
        success={handleSuccess}
      >
        <button>Select File</button>
      </DropboxChooser>

      <br />
      <p style={{ color: "red" }}>{imgError}</p>
      {imgLink && (
        <img
          src={imgLink}
          alt="Preview"
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "",
          }}
        />
      )}
    </div>
  );
}

export default DropBox;
