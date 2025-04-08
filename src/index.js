import React from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import Timeline from "./components/TimeLine/TimeLine.jsx";

function App() {
  return (
    <div>
      <h2 className="timeline-title">My Timeline</h2>
      <Timeline />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);