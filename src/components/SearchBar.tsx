import styles from "./SearchBar.module.css";
import plus from "../assets/plus.svg";
import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
  handleAddTask: (event: FormEvent, task: string) => void;
}

export function SearchBar({ handleAddTask }: SearchBarProps) {
  const [task, setTask] = useState("");

  function addTask(event: FormEvent) {
    handleAddTask(event, task);
  }

  function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  return (
    <form onSubmit={addTask}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleChangeText}
      />
      <button className={styles.button} type="submit">
        <div className={styles.wrapper}>
          Criar <img src={plus}></img>
        </div>
      </button>
    </form>
  );
}
