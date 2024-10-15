export enum TaskStatus {
  NEW = "NEW",
  OFFER_ACCEPTED = "OFFER_ACCEPTED",
  COMPLETED = "COMPLETED",
}

export const TASK_STATUSES = [
  {
    label: "new",
    value: "new",
  },
  {
    label: "offer_accepted",
    value: "offer_accepted",
  },
  {
    label: "completed",
    value: "completed",
  },
];

export interface ITask {
  _id: string;
  title: string;
  status: TaskStatus;
  type: string;
  start_date: string;
  end_date: string;
  visible_from: Date;
  createdAt: Date;
  updatedAt: Date;
}
