import Image from 'next/image';
import { ITask } from 'src/shared/lib/constants';

interface TaskItemProps extends ITask {}

const TaskItem = (props: TaskItemProps) => {
  const { images: taskImages, title, status } = props;
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        {taskImages[0] && (
          <Image
            src={taskImages[0].secure_url}
            width={500}
            height={500}
            alt={props.title}
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
          />
        )}
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-blue-400">
            {title}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {title}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-green-300">{status}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
        </p>
      </div>
    </li>
  );
};

export default TaskItem;
