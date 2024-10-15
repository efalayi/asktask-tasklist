import { getTaskList } from 'src/shared/lib/http';

import TaskList from 'src/shared/components/Task/TaskList';

export default async function Home() {
  const response = await getTaskList();

  return (
    <>
      <TaskList tasks={response?.data?.taskList} status="all" />
    </>
  );
}
