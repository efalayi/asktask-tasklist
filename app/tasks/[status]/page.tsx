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
      <h3>
        Task List
        <span className="ml-1">(status: {params.status})</span>
      </h3>

      <section>
        <TaskList tasks={response?.data?.taskList} />
      </section>
    </>
  );
}
