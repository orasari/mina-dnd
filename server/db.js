// Mock "tables"
let ready = [
  { id: 1, name: 'Task 1', description: 'Description of Task 1' },
  { id: 2, name: 'Task 2', description: 'Description of Task 2' }
];

let in_progress = [
  { id: 3, name: 'Task 3', description: 'Description of Task 3' }
];

let review = [
  { id: 4, name: 'Task 4', description: 'Description of Task 4' }
];

let to_do = [
  { id: 5, name: 'Task 5', description: 'Description of Task 5' },
  { id: 6, name: 'Task 6', description: 'Description of Task 6' },
  { id: 7, name: 'Task 7', description: 'Description of Task 7' }
];

// Column names
const columnNames = ['ready', 'in_progress', 'review', 'to_do'];

// Exported functions
export const getReadyTasks = () => ready;
export const getInProgressTasks = () => in_progress;
export const getReviewTasks = () => review;
export const getToDoTasks = () => to_do;
export const getAllTasks = () => ({ ready, in_progress, review, to_do });
export const getColumnNames = () => columnNames;
