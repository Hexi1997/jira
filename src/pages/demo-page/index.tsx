import React, { memo } from "react";
import { useArray } from "../../utils/hooks";

export interface IPerson {
  name: string;
  age: number;
}
export default memo(function DemoPage() {
  const { value, add, clear, remove } = useArray([
    {
      name: "张三",
      age: 22,
    },
    {
      name: "李四",
      age: 30,
    },
  ]);

  return (
    <div>
      {value.map((item, index) => {
        return <div key={index}>{JSON.stringify(item)}</div>;
      })}
      <button onClick={() => console.log("add", add({ name: "add", age: 20 }))}>
        add person
      </button>
      <button onClick={() => console.log("remove", remove(0))}>
        remove first person
      </button>
      <button onClick={() => console.log("clear", clear())}>
        clear persons
      </button>
    </div>
  );
});
