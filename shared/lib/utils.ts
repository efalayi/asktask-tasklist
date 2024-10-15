import { ITask } from './constants';

export type SortOrder = 'asc' | 'desc'

export function sortTaskByTitle(list: Array<ITask>, order: SortOrder) {
  const sortedList = list.sort((itemA, itemB) => {
    const titleA = itemA.title.toLowerCase().trim();
    const titleB = itemB.title.toLowerCase().trim();

    return (order === 'asc' && titleA> titleB ) || (order === 'desc' && titleA < titleB) ? 1
    : (order === 'asc' && titleA < titleB) || (order === 'desc' && titleA > titleB) ? -1
    : 0;
  });

  return sortedList;
}