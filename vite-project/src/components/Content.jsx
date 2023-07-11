import { useState } from "react";

const Content = () => {
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = () => {
    setDisplayText(document.getElementById("textarea").value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <textarea id="textarea" rows="4" cols="50" />

      <div>
        <button
          onClick={handleButtonClick}
          style={{
            marginTop: "10px",
          }}
        >
          Display Text
        </button>
      </div>
      {displayText && <p>{displayText}</p>}
    </div>
  );
};

export default Content;
