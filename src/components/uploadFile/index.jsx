/* eslint-disable react/prop-types */
import React from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

import FilePondPluginFileEncode from "filepond-plugin-file-encode";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode
);

function FileUpload({ files, setFiles }) {
  return (
    <div className="App">
      <FilePond
        files={files}
        allowMultiple={true}
        onupdatefiles={setFiles}
        labelIdle='Drag & Drop your Image or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}

export default FileUpload;
