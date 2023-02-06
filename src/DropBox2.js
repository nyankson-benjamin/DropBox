import React from "react";
import Dropbox from "react-dropbox-chooser";
function DropBox2() {
  function openChooser() {
    const chooser = new Dropbox.Chooser({
      success: (file) => console.log(file),
      cancel: () => console.log("Chooser closed"),
    });
    chooser.open();
  }

  return (
    <div>
      <button onClick={openChooser}>Open Chooser</button>
    </div>
  );
}

export default DropBox2;
