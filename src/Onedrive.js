// import "./styles.css";
import { ReactOneDriveFilePicker } from "react-onedrive-filepicker";
const KEY = "addf3ca1-3568-4e20-b4fb-01067df44d73";

export default function Onedrive() {
  const handleCancel = () => console.log("CANCELLED");

  const handleSuccess = (files) => console.log("SUCCESS: ", files);

  const handleError = (err) => console.log("ERROR: ", err);

  var launchOneDrivePicker = function (
    oneDriveApplicationId,
    action,
    multiSelect,
    advancedOptions
  ) {
    return new Promise(function (resolve, reject) {
      var odOptions = {
        clientId: 'addf3ca1-3568-4e20-b4fb-01067df44d73',
        action: action || "download",
        multiSelect: multiSelect || true,
        openInNewWindow: true,
        advanced: advancedOptions || {},
        success: function (files) {
          handleSuccess(files);
        },
        cancel: function () {
          handleCancel();
        },
        error: function (e) {
          handleError(e);
        },
      };
      Onedrive.open(odOptions);
    });
  };

  return (
    <div className="App">
      <button onClick={() => launchOneDrivePicker(KEY, "share")}>
        Click here to open
      </button>
    </div>
  );
}
