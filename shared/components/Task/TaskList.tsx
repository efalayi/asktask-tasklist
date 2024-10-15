import { ITask } from 'src/shared/lib/constants';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: ITask[];
}
const TaskList = (props: TaskListProps) => {
  const { tasks } = props;
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {tasks.map(task => (
        <TaskItem key={task._id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
