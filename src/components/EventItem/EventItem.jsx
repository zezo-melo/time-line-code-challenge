import React from "react";
import { getLeftOffset, getWidth } from "../../utils/dateHelpers";
import "./EventItem.css"

export default function EventItem({ item }) {
  const left = getLeftOffset(item.start);
  const width = getWidth(item.start, item.end);

  return (
    <div
      className="event"
      style={{
        position: "absolute",
        top: 0,
        left: `${left}px`,
        width: `${width}px`,
      }}
    >
      {item.name}
    </div>
  );
}
