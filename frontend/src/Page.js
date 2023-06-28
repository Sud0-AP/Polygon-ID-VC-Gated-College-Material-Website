import React from "react";
import EmbeddedDriveFolder from "./EmbeddedDriveFolder";
import logo from "./logo.png"; // Replace with your own logo file

const Page = ({ driveLink, headingText }) => {
  return (
    <div>
      <header
        style={{
          background: "#B2B2B2",
          color: "#000",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          zIndex: "1",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "230px", height: "60px", marginRight: "10px" }}
          />
          <h1 style={{ margin: "0", flex: "1", textAlign: "center" }}>
            {headingText}
          </h1>
          <div style={{ width: "50px" }}></div>
        </div>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 80px)", // Use minHeight instead of height to prevent overlapping with the top bar
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          backgroundColor: "#E9ECEF",
          padding: "40px",
          marginTop: "120px", // Adjust the marginTop to create space below the top bar
          marginBottom: "150px",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <EmbeddedDriveFolder link={driveLink} />
        </div>
      </div>
    </div>
  );
};

export default Page;
