import { TaskStatus } from './constants';

const taskListQueryFields = `{
  _id
  title
  status
  type
  start_date
  end_date
  createdAt
  updatedAt
  images
}`;

export async function getTaskList() {
  const apiResponse = await fetch(process.env.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
        taskList ${taskListQueryFields}
      }`,
    }),
  });

  const apiData = await apiResponse.json();

  if (apiResponse.ok) {
    return apiData;
  }
  return Promise.reject({
    apiData,
  });
}

export async function filterTaskList({ status }: { status: string }) {
  // const taskStatus = TaskStatus[status]

  const apiResponse = await fetch(process.env.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
        taskList(filter: { status: ${status.toUpperCase()}}) ${taskListQueryFields}
      }`,
    }),
  });

  const apiData = await apiResponse.json();

  if (apiResponse.ok) {
    return apiData;
  }

  return Promise.reject({
    apiData,
  });
}
