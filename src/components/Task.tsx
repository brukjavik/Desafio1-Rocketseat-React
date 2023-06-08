import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

interface TaskProps {
  task: string;
  handleConcluidas: () => void;
  handleDeletarTarefa: (taskToDelete: string) => void;
}

export function Task({
  task,
  handleConcluidas,
  handleDeletarTarefa,
}: TaskProps) {
  function handleDeleteTask() {
    handleDeletarTarefa(task);
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onClick={handleConcluidas}
      />
      <p>{task}</p>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
