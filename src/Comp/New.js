import React from "react";
import { useState } from "react";
import DropboxChooser from "./Drop";
// import "./style.css";

export default function App() {
  const [lnk, setLnk] = useState();
  const request = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";

    xhr.addEventListener(
      "load",
      function () {
        const buffer = xhr.response;
        console.log("Buffer", buffer);
        setLnk(URL.createObjectURL(buffer));

        // const psd = readPsd(buffer);
        // console.log(psd);
      },
      false
    );
    xhr.send();
  };

  const onSuccess = (files) => {
    // console.log('onSuccess', files)
    const { link } = files[0];
    console.log(link);
    setLnk(request(link));
  };

  //   const test = () => {
  //     const url =
  //       "https://dl.dropboxusercontent.com/1/view/vskds5y4eqav5mh/18071524.jpeg";
  //     request(url);
  //   };

  return (
    <div>
      {lnk && <img src={lnk} alt="Pictures" />}
      <DropboxChooser onSuccess={onSuccess} />
      {/* <button onClick={test}>test</button> */}
    </div>
  );
}
