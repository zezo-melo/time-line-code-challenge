import React from "react";
import assignLanes from "../../assignLanes";
import timelineItems from "../../timelineItems";
import Lane from "../Lane/Lane";
import TimelineHeader from "../TimeLineHeader/TimeLineHeader";
import { useMemo } from "react";
import "./TimeLine.css"

export default function Timeline() {
  const lanes = assignLanes(timelineItems);

  const [minDate, maxDate] = useMemo(() => {
    const allDates = timelineItems.flatMap(item => [item.start, item.end]);
    const min = allDates.reduce((a, b) => (a < b ? a : b));
    const max = allDates.reduce((a, b) => (a > b ? a : b));
    return [min, max];
    
  }, []);  

  return (    
    <div className="timeline">
      <div className="timeline-content">
      <TimelineHeader startDate={minDate} endDate={maxDate} />
      {lanes.map((laneItems, index) => (
        <Lane key={index} items={laneItems} />
      ))}
    </div>
    </div>
  );
}
