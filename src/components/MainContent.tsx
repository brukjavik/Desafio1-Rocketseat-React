import { useState } from "react";
import styles from "./MainContent.module.css";
import { Task } from "./Task";
import clipboard from "../assets/clipboard.svg";

interface MainContentProps {
  tasks: string[];
  criadas: number;
  handleDeletarTarefa: (taskToDelete: string) => void;
}

export function MainContent({
  tasks,
  criadas,
  handleDeletarTarefa,
}: MainContentProps) {
  const [concluidas, setConcluidas] = useState(0);

  function handleConcluidas() {
    setConcluidas(concluidas + 1);
    console.log("AOBA");
  }

  return (
    <div className={styles.parent}>
      <div className={styles.wrapper}>
        <div className={styles.created}>
          <p>Tarefas criadas</p>
          <div>{criadas}</div>
        </div>
        <div className={styles.finished}>
          <p>Concluídas</p>
          {concluidas === 0 ? (
            <div>{concluidas}</div>
          ) : (
            <div>
              {concluidas} de {criadas}
            </div>
          )}
        </div>
      </div>
      <div
        className={
          criadas === 0
            ? `${styles.tasksList} ${styles.yellow}`
            : styles.tasksList
        }
      >
        {criadas === 0 ? (
          <>
            <img src={clipboard} alt="Clipboard" />
            <p className={styles.firstMessage}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p className={styles.secondMessage}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </>
        ) : (
          <>
            {tasks.map((task) => {
              return (
                <Task
                  task={task}
                  handleConcluidas={handleConcluidas}
                  handleDeletarTarefa={handleDeletarTarefa}
                  key={task}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
