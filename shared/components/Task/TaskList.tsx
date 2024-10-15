'use client';

import { useMemo, useState } from 'react';
import { ITask } from 'src/shared/lib/constants';
import { sortTaskByTitle, SortOrder } from 'src/shared/lib/utils';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: ITask[];
  status: string;
}
const TaskList = (props: TaskListProps) => {
  const { tasks, status } = props;
  const [currentSortOrder, setCurrentSortOrder] = useState('');

  const sortedItems = useMemo(() => {
    const [, order] = currentSortOrder.split('_');

    return order ? sortTaskByTitle([...tasks], order as SortOrder) : tasks;
  }, [currentSortOrder, tasks]);

  console.log('tasks: ', tasks);

  return (
    <>
      <section className="flex items-center justify-between mb-5">
        <h3>
          Task List
          <span className="ml-1 capitalize">
            (<small>{status.replace(/_/, ' ')}</small>)
          </span>
        </h3>
        <label
          htmlFor="pet-select"
          className="inline-flex items-center gap-x-3">
          <select
            name="sortBy"
            id="sortBy"
            className="h-full rounded-md border-0 px-2 py-1 text-blue-500 font-medium focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm"
            value={currentSortOrder}
            onChange={event => {
              setCurrentSortOrder(event.target.value);
            }}>
            <option value="">Sort by:</option>
            <option value="title_asc">Title: ascending</option>
            <option value="title_desc">Title: descending</option>
          </select>
        </label>
      </section>

      <ul role="list" className="divide-y divide-gray-800">
        {sortedItems.map(task => (
          <TaskItem key={task._id} {...task} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
