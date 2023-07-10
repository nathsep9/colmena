import { ItemTask } from "./ItemTask";
import { Task } from "../types";

export function ActionsTask({
  data,
  setData,
}: {
  data: Task[];
  setData(data: Task[]): void;
}) {
  return data.map((item, i) => (
    <ItemTask
      key={i}
      item={item}
      onChangeComplete={(completed) => {
        setData(
          data.map((prev, index) => {
            if (index === i) return { ...prev, completed };

            return prev;
          })
        );
      }}
      onDelete={() => {
        setData(data.filter((_, index) => index !== i));
      }}
      onEdit={(task) => {
        setData(
          data.map((prev, index) => {
            if (index === i) return task;
            return prev;
          })
        );
      }}
    />
  ));
}
