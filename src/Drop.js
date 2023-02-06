import React, { useState, useEffect } from "react";
import DropboxChooser from "react-dropbox-chooser";
import { useNavigate } from "react-router-dom";
function DropBox() {
  const [imgLink, setImgLink] = useState();
  const [imgError, setImgError] = useState();
  const [links, setLinks] = useState([{}]);
  const navigate = useNavigate();
  const myRegex = /(https?:\/\/.*\.(?:png|jpg))/i;

  const [users, setUsers] = useState([
    {
      name: "Benjamin",
      id: 1,
    },
    {
      name: "Benjamin",
      id: 2,
    },
  ]);
  //dropkey
  const drop = {
    appKey: process.env.REACT_APP_APPKEY,
  };

  const handleSuccess = (files) => {
    const imageUrl = files[0].link;
    const link = imageUrl.slice(0, -5) + "?raw=1";
    // setImgLink(link);
    navigate("/");
    if (!link.match(myRegex)) {
      setImgError("Please select images only");
      setImgLink(null);
    } else {
      setImgLink(link);
      setImgError("");
      console.log(files);
      console.log(files.id);
      console.log(files.length);
      console.log(link);
      console.log(imageUrl);
      //   setLinks(files.link);

      //loop
      const filesLenght = files.length;
      if (filesLenght === 1) {
        console.log(`you selected ${filesLenght} file`);
      } else {
        console.log(`you selected ${filesLenght} files`);
      }

      // files.forEach((element) => {
      //   const imgURLS = [element.link.slice(0, -5) + "?raw=1"];
      //   const imgID = [element.id.slice(3)];
      //   console.log(imgID);
      //   // console.log([element.link.slice(0, -5) + "?raw=1"]);

      //   let id = 0;
      //   for (let i = 0; i <= filesLenght; i++) {
      //     id += i;
      //     setLinks([
      //       {
      //         url: imgURLS,
      //         id: imgID,
      //       },
      //     ]);
      //     //   console.log(id)
      //     //   console.log("hey");
      //     //   setLinks(myLinks);
      //     //   console.log(myLinks);
      //   }
      //   // console.log(links);
      //   // myLinks.forEach((element) => {
      //   //   console.log([element]);
      //   // });
      // });

      files.forEach((element) => {
        const me = { url: [element.link] };
        console.log(files);
      });
    }
  };

  return (
    <div style={{ overFlow: "scroll", background: "blue" }}>
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

      <div>
        {links.map((links) => (
          <div key={links.id}>
            <p>{links.url}</p>
            <img src={links.url} alt="" />
            <p>{links.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropBox;
