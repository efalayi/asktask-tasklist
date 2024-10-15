export enum TaskStatus {
  NEW = 'NEW',
  OFFER_ACCEPTED = 'OFFER_ACCEPTED',
  COMPLETED = 'COMPLETED',
}

export const TASK_STATUSES = [
  {
    label: 'new',
    value: 'new',
  },
  {
    label: 'Offer accepted',
    value: 'offer_accepted',
  },
  {
    label: 'Completed',
    value: 'completed',
  },
];

export interface IImage {
  secure_url: string;
}

export interface ITask {
  _id: string;
  title: string;
  status: TaskStatus;
  type: string;
  start_date: string;
  end_date: string;
  createdAt: Date;
  updatedAt: Date;
  images: Array<IImage>;
}
