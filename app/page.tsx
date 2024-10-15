import { getTaskList } from 'src/shared/lib/http';

import TaskList from 'src/shared/components/Task/TaskList';

export default async function Home() {
  const response = await getTaskList();

  console.log('response: ', response.data);
  return (
    <>
      <h3>
        Task List
        <span className="ml-1">(All)</span>
      </h3>

      <section>
        <TaskList tasks={response?.data?.taskList} />
      </section>
    </>
  );
}
