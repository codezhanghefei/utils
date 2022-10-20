import { anyInterface } from '../interfaces/common.interface'

function isObject(param: anyInterface): boolean {
  return Object.prototype.toString.call(param) === '[object Object]';
}

export default function formatHump(arg: anyInterface, reversal = false): any {
  if (isObject(arg)) {
    const result: anyInterface = {};
    const keys = Object.keys(arg);
    for (let key of keys) {
      let value = arg[key];
      if (Array.isArray(value)) {
        value = value.map((item: any) => {
          return formatHump(item, reversal);
        });
      }
      // key 中包含 - 时，不做处理
      if (!key.includes('-')) {
        const firstWord = key.charAt(0);
        if(reversal) {
          key = key.replace(firstWord, firstWord.toUpperCase());
        } else {
          key = key.replace(firstWord, firstWord.toLowerCase());
        }
      }
      result[key] = isObject(value) ? formatHump(value, reversal) : value;
    }
    return result;
  } else if (Array.isArray(arg)) {
    return arg.map((item) => formatHump(item, reversal));
  } else {
    return arg;
  }
}