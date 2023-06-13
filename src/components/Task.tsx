import { useState } from "react";
import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

interface TaskProps {
  task: string;
  handleConcluidas: (flag: boolean) => void;
  handleDeletarTarefa: (taskToDelete: string, flag: boolean) => void;
}

export function Task({
  task,
  handleConcluidas,
  handleDeletarTarefa,
}: TaskProps) {
  function handleDeleteTask() {
    handleDeletarTarefa(task, flag);
  }

  const [state, setState] = useState(false);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setState(!state);
    if (!state && !flag) {
      handleConcluidas(flag);
      setFlag(true);
    } else if (state && flag) {
      handleConcluidas(flag);
      setFlag(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onClick={handleClick}
      />
      <p className={state ? styles.crossed : ""}>{task}</p>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
