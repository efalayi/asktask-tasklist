import { filterTaskList } from 'src/shared/lib/http';

import TaskList from 'src/shared/components/Task/TaskList';

export default async function TasksPage({
  params,
}: {
  params: { status: string };
}) {
  const { status } = params;

  const response = await filterTaskList({ status });

  return (
    <>
      <TaskList tasks={response?.data?.taskList} status={params.status} />
    </>
  );
}
