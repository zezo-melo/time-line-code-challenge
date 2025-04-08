function assignLanes(items) {
    const sortedItems = [...items].sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
  
    const lanes = [];
  
    for (const item of sortedItems) {
      let placed = false;
  
      for (const lane of lanes) {
        const conflicting = lane.find(other => {
          const startA = new Date(item.start).getTime();
          const endA = new Date(item.end).getTime();
          const startB = new Date(other.start).getTime();
          const endB = new Date(other.end).getTime();
  
          return !(endA < startB || startA > endB);
        });
  
        if (!conflicting) {
          lane.push(item);
          placed = true;
          break;
        }
      }
  
      if (!placed) {
        lanes.push([item]);
      }
    }
  
    return lanes;
  }
  
  export default assignLanes;
  