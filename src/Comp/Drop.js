import React, { useEffect, useCallback, useMemo } from "react";
import loadScript from "load-script";

const DROPBOX_APP_KEY = process.env.REACT_APP_APPKEY; // App key
const DROPBOX_SDK_URL = "https://www.dropbox.com/static/api/2/dropins.js";
const DROPBOX_SCRIPT_ID = "dropboxjs";

export default function DropboxChooser({ children, onSuccess, onCancel }) {
  const options = useMemo(
    () => ({
      // Required. Called when a user selects an item in the Chooser.
      success: (files) => {
        console.log("success", files);
        onSuccess && onSuccess(files);
      },
      // Optional. Called when the user closes the dialog without selecting a file
      // and does not include any parameters.
      cancel: () => {
        console.log("cancel");
        onCancel && onCancel();
      },

      // Optional. "preview" (default) is a preview link to the document for sharing,
      // "direct" is an expiring link to download the contents of the file. For more
      linkType: "direct", // or "preview"
      multiselect: false, 
      extensions: [".png", ".jpg", ".jpeg", ".webp"],

      // Optional. A value of false (default) limits selection to files,
      // while true allows the user to select both folders and files.
      // You cannot specify `linkType: "direct"` when using `folderselect: true`.
      folderselect: false, // or true
    }),
    [onSuccess, onCancel]
  );

  useEffect(() => {
    loadScript(DROPBOX_SDK_URL, {
      attrs: {
        id: DROPBOX_SCRIPT_ID,
        "data-app-key": DROPBOX_APP_KEY,
      },
    });
  }, []);

  const handleChoose = useCallback(() => {
    if (window.Dropbox) {
      window.Dropbox.choose(options);
    }
  }, [options]);

  return <div onClick={handleChoose}>{children || <button>DROP</button>}</div>;
}
