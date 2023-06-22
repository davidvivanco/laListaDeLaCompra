import { remove } from 'ionicons/icons';

function clone<T>(arg: T): T {
  return arg;
}

function removeDuplicatedElements(arr: Array<any> = []) {
  return Array.from(new Set(arr));
}

export { clone, removeDuplicatedElements };
