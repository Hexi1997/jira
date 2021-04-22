import { useEffect, useState } from "react";

//自定义的hook

/**
 * componentDidMount声明周期hook,省得每次都要useEffect和[]
 * @param callback 回调
 */
export const useComponentDidMount = (callback: Function) => {
  useEffect(() => {
    callback();
  }, [callback]);
};

// export const useDebounce = (callback: Function, delay: number) => {
//   let timeout: number;
//   return () => {
//     timeout && clearTimeout(timeout);
//     timeout = setTimeout(callback, delay);
//   };
// };
export const useDebounce = <V>(value: V, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    //每次value变化的时候，设置一个定时器
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    //如果value连续变化多次，每次都会执行清除定时器。因此只有再最后一次变化后，延迟delay才会执行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

export const useArray = <T>(objArr: T[]) => {
  const [value, setValue] = useState(objArr);
  /**
   * 添加，返回值是添加后的数组长度
   * @param objAdd 要添加的对象
   */
  const add = (objAdd: T) => {
    const lengthBefore = value.length;
    setValue((value) => {
      const next = [...value, objAdd];
      return next;
    });
    //返回新增后的长度
    return lengthBefore + 1;
  };
  /**
   * 删除指定索引的数据，返回被删除的对象
   * @param index 索引
   */
  const remove = (index: number) => {
    const copy = [...value];
    const objRemoved = copy.splice(index, 1);
    setValue(copy);
    //返回删除项
    return objRemoved && objRemoved.length > 0 && objRemoved[0];
  };
  /**
   * 清空
   */
  const clear = () => {
    setValue([]);
  };
  return { value, add, clear, remove, setValue };
};
