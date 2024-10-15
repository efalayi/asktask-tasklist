import { ITask } from 'src/shared/lib/constants';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: ITask[];
}
const TaskList = (props: TaskListProps) => {
  const { tasks } = props;
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
