const MS_PER_DAY = 1000 * 60 * 60 * 24;
const START_DATE = new Date("2021-01-01");
const PIXELS_PER_DAY = 16;

function parse(dateStr) {
  return new Date(dateStr);
}

function daysBetween(start, end) {
  return Math.floor((parse(end) - parse(start)) / MS_PER_DAY);
}

export function getLeftOffset(dateStr) {
  const days = daysBetween(START_DATE, dateStr);
  return days * PIXELS_PER_DAY;
}

export function getWidth(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffInDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

  const width = diffInDays * 10;
  return Math.max(width, 60);    
}

