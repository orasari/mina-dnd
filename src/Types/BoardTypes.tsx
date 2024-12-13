export type BoardDataType = {
    columns: string[];
    tasks: TasksType
}

export type TaskType = {
    id: number;
    name: string;
    description: string;
};
  
  export type TasksType = {
    ready: TaskType[];
    in_progress: TaskType[];
    review: TaskType[];
    to_do: TaskType[];
  };
  