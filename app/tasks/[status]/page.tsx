import { filterTaskList } from "src/shared/lib/http";

export default async function TasksPage({
  params,
}: {
  params: { status: string };
}) {
  const { status } = params;

  const response = await filterTaskList({ status });

  return (
    <>
      <div>My Post: {params.status}</div>

      <section>
        <ul>
          {response?.data?.taskList.map((item) => {
            return (
              <span key={item._id} className="block">
                {item._id}
              </span>
            );
          })}
        </ul>
      </section>
    </>
  );
}
