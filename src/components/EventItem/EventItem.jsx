import React from "react";
import { getLeftOffset, getWidth } from "../../utils/dateHelpers";
import "./EventItem.css"

export default function EventItem({ item }) {
  const left = getLeftOffset(item.start);
  const width = getWidth(item.start, item.end);
  const colors = ["#4a90e2", "#50e3c2", "#f5a623", "#bd10e0", "#7ed321"];
  const backgroundColor = colors[item.id % colors.length];

  return (
    <div
      className="event"
      style={{
        left: `${left}px`,
        width: `${width}px`,
        backgroundColor,
        position: "absolute",
        top: 0,
      }}
    >
      {item.name}
    </div>
  );
}
