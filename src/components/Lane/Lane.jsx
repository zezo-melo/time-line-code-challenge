import React from "react";
import EventItem from "../EventItem/EventItem";
import "./Lane.css"

export default function Lane({ items }) {
  return (
    <div className="lane">
      {items.map((item, index) => (
        <EventItem key={item.id} item={item} />

      ))}
      <span style={{ position: "absolute", left: 9, top: 9, fontSize: 10, fontWeight: 600, background: "#ccc", padding: 6, borderRadius: 5 }}>
        {items.length} Events
      </span>
    </div>
  );
}
