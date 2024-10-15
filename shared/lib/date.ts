import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export function getTimeFromNow(date: Date) {
  const now = dayjs();

  return dayjs.duration(-now.diff(date), 'hours').humanize(true);
}
