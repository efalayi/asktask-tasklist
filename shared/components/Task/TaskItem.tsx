import { ITask } from 'src/shared/lib/constants';

interface TaskItemProps extends ITask {}

const TaskItem = (props: TaskItemProps) => {
  return <li className="block">{props._id}</li>;
};

export default TaskItem;
