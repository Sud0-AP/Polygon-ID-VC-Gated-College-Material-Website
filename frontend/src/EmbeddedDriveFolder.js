import React from "react";

const EmbeddedDriveFolder = ({ link }) => {
  return (
    <div>
      <iframe
        title="Embedded Drive Folder"
        src={link}
        width="1500"
        height="800"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbeddedDriveFolder;
