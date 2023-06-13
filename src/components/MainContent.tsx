import styles from "./MainContent.module.css";
import { Task } from "./Task";
import clipboard from "../assets/clipboard.svg";

interface MainContentProps {
  tasks: string[];
  criadas: number;
  concluidas: number;
  handleDeletarTarefa: (taskToDelete: string, flag: boolean) => void;
  handleConcluidas: (flag: boolean) => void;
}

export function MainContent({
  tasks,
  criadas,
  concluidas,
  handleDeletarTarefa,
  handleConcluidas,
}: MainContentProps) {
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
