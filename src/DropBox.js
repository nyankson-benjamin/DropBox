import { useState } from "react";
import DropboxChooser from "react-dropbox-chooser";
import useDropBox from "./Hooks/useDropBox";

function DropBox() {
  const [imgLink, imgError, drop, handleSuccess, links, users] = useDropBox();

  // const [user, setUsers] = useState([
  //   {
  //     name: "Benjamin",
  //     id: 1,
  //   },
  // ]);
  return (
    <div>
      <DropboxChooser
        appKey={drop.appKey}
        multiselect={true}
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
