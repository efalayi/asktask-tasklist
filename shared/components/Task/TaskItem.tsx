import Image from 'next/image';
import { ITask, TaskStatus } from 'src/shared/lib/constants';

import { getTimeFromNow } from 'src/shared/lib/date';

interface TaskItemProps extends ITask {}

const TaskItem = (props: TaskItemProps) => {
  const { images: taskImages, title, status, updatedAt } = props;
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        {taskImages[0] ? (
          <Image
            src={taskImages[0].secure_url}
            width={500}
            height={500}
            alt={props.title}
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
          />
        ) : (
          <span className="h-12 w-12 inline-flex flex-none items-center justify-center rounded-full bg-gray-50 text-blue-600">
            T
          </span>
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
        <span
          className={`leading-6 rounded-md border-0 px-2 py-1 font-medium ${status === TaskStatus.COMPLETED ? 'bg-green-50 text-green-600' : status === TaskStatus.OFFER_ACCEPTED ? 'bg-yellow-50 text-yellow-600' : 'bg-blue-50 text-blue-600'}`}>
          <small>{status}</small>
        </span>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Last updated{' '}
          <time dateTime={updatedAt.toString()}>
            {getTimeFromNow(updatedAt)}
          </time>
        </p>
      </div>
    </li>
  );
};

export default TaskItem;
