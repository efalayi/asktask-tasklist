import { getTaskList } from "src/shared/lib/http";


export default async function Home() {
  const response = await getTaskList();

  console.log("response: ", response.data);
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <section>
          <h2>Task List</h2>
        </section>

        <section>
          <ul>
            {response?.data?.taskList.map((item) => {
              return (
                <li key={item._id} className="block">
                  {item._id}
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span>footer</span>
      </footer>
    </div>
  );
}
