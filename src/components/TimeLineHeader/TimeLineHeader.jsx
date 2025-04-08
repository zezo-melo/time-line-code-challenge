import React from "react";
import { getLeftOffset } from "../../utils/dateHelpers";
import "./TimeLineHeader.css";

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function TimelineHeader({ startDate, endDate }) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const months = [];
  let current = new Date(start.getFullYear(), start.getMonth(), 1);

  while (current <= end) {
    const year = current.getFullYear();
    const month = current.getMonth();
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);

    months.push({
      name: `${MONTH_NAMES[month]} ${year}`,
      left: getLeftOffset(monthStart.toISOString().split("T")[0]),
      width: (monthEnd.getDate()) * 10,
    });

    current.setMonth(current.getMonth() + 1);
  }

  return (
    <div className="timeline-header">
      {months.map((month, idx) => (
        <div
          key={idx}
          className="month"
          style={{
            left: `${month.left}px`,
            width: `${month.width}px`,
            position: "absolute",
            textAlign: "center",
            borderRight: "1px solid #ccc",
            fontSize: "12px",
            fontWeight: 600,
            paddingTop: "4px",
          }}
        >
          {month.name}
        </div>
      ))}
    </div>
  );
}
