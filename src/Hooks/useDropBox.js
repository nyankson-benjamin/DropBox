import React, { useState, useEffect } from "react";

function DropBox() {
  const [imgLink, setImgLink] = useState();
  const [imgError, setImgError] = useState();
  const [links, setLinks] = useState([{}]);
  // const [file, setFile] = useState();

  const myRegex = /(https?:\/\/.*\.(?:png|jpg))/i;

  //dropkey
  const drop = {
    appKey: process.env.REACT_APP_APPKEY,
  };

  const handleSuccess = (files) => {
    const imageUrl = files[0].link;

    const link = imageUrl.slice(0, -5) + "?raw=1";
    // setFile(imageUrl.slice(0, -5) + "?rawbhvhvhvhvhvhv=1");
    // setImgLink(link);
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

      // if (link) {
      //   const ACCESS_TOKEN =
      //     "sl.BYCWvTDSzpM3lBfLyTRBiWPyB48WPGWB1nNEqTjsIiSLfheXiE-uR64tn-NhT3qftkooP1ZBCyG1i56e-HD_TyovDbUDeUEquYfby64UoHIyQon2ucJVKhj305e8pfMPCFH7jbM";

      //   async function main() {
      //     // const file = "/example.txt";

      //     // Use the Dropbox API to retrieve the contents of the file
      //     const response = await fetch(
      //       `https://content.dropboxapi.com/2/files/download`,
      //       {
      //         method: "POST",
      //         headers: {
      //           Authorization: `Bearer ${ACCESS_TOKEN}`,
      //           "Dropbox-API-Arg": JSON.stringify({ path: link }),
      //         },
      //       }
      //     );

      //     const fileBinary = await response.arrayBuffer();
      //     const fileBlob = new Blob([fileBinary], { type: "image/jpeg" });
      //     console.log("Blob", fileBlob);
      //     console.log(URL.createObjectURL(fileBlob));
      //   }

      //   main().catch(console.error);
      // }
      //loop
      // const filesLenght = files.length;
      // if (filesLenght === 1) {
      //   console.log(`you selected ${filesLenght} file`);
      // } else {
      //   console.log(`you selected ${filesLenght} files`);
      // }

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
    }
  };

  // useEffect(() => {
  //   if (file) {
  //     const ACCESS_TOKEN =
  //       "sl.BYCWvTDSzpM3lBfLyTRBiWPyB48WPGWB1nNEqTjsIiSLfheXiE-uR64tn-NhT3qftkooP1ZBCyG1i56e-HD_TyovDbUDeUEquYfby64UoHIyQon2ucJVKhj305e8pfMPCFH7jbM";

  //     async function main() {
  //       // const file = "/example.txt";

  //       // Use the Dropbox API to retrieve the contents of the file
  //       const response = await fetch(
  //         `https://content.dropboxapi.com/2/files/download`,
  //         {
  //           method: "POST",
  //           headers: {
  //             Authorization: `Bearer ${ACCESS_TOKEN}`,
  //             "Dropbox-API-Arg": JSON.stringify({ path: file }),
  //           },
  //         }
  //       );

  //       const fileBinary = await response.arrayBuffer();
  //       const fileBlob = new Blob([fileBinary], { type: "image/jpeg" });
  //       console.log("Blob", fileBlob);
  //       console.log(URL.createObjectURL(fileBlob));
  //     }

  //     main().catch(console.error);
  //   }
  // });

  useEffect(() => {
    fetch(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
    )
      .then((res) => {
        // res.blob();
        console.log("blob", res.blob());
      })
      .then((blob) => console.log(blob));
  });
  console.log(links);
  return [imgLink, imgError, drop, handleSuccess, links];
}

export default DropBox;
