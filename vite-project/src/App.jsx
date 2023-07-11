import { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = () => {
    const textAreaValue = document.getElementById("text-area").value;
    setDisplayText(textAreaValue);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        minHeight: "100vh",
        gap: "1rem",
        padding: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header title="Next JS Module-06 Assignment" />

      <div style={{ flex: 1 }}>
        <Content onButtonClick={handleButtonClick} />
        <p>{displayText}</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
