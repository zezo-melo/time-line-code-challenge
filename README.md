# time-line-code-challenge

![{FB9F3E24-C0C8-49A8-B14B-03B115481C71}](https://github.com/user-attachments/assets/e5210bc0-34ff-45cd-ba8c-149b840f52e0)


This project is a solution to the Airtable Timeline Assignment.

## 📌 Objective

The goal was to implement a component for visualizing items on a timeline, using horizontal lanes to display events efficiently. Items that do not overlap in time share the same lane, ensuring a compact and readable layout.

## ✅ What was implemented

- ✔️ Events positioned horizontally based on start and end dates
- ✔️ Compact lane assignment logic (using `assignLanes.js`)
- ✔️ Overlap detection based on pixel position (visual collision avoided)
- ✔️ Responsive scrollable layout with support for varying event durations
- ✔️ Zoom control to adjust pixels-per-day
- ✔️ Clean code structure using React components and modular CSS
- ✔️ Deploy on Vercel: https://time-line-code-challenge.vercel.app/

## 🧠 Design Decisions

- Used absolute positioning to ensure full control over event placement.
- Applied a minimum width to short events to preserve readability.
- Implemented lane assignment from scratch to avoid timeline libraries, as instructed.
- Designed with white-space efficiency in mind, balancing event label visibility with accurate date proportions.

## 🔁 What I would improve

If I had more time, I would:
- Add drag-and-drop to allow adjusting event dates.
- Implement inline editing for event names.
- Refine the timeline header for better month alignment at all zoom levels.
- Extract a theme system for easier styling and customization.

## With more time, I would:
- Write unit tests for `assignLanes` using Jest (or Vitest).
- Add visual regression tests to ensure event layout consistency.
- Test edge cases like overlapping same-day events or very long timelines.

## ▶️ How to run the project

1. Clone the repository:
git clone https://github.com/zezo-melo/time-line-code-challenge.git

2. Install dependencies:
npm install

3. Start the app:
npm start
