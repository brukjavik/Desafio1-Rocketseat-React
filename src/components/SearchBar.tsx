import styles from "./SearchBar.module.css";
import plus from "../assets/plus.svg";

export function SearchBar() {
  return (
    <form>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.button} type="submit">
        <div className={styles.wrapper}>
          Criar <img src={plus}></img>
        </div>
      </button>
    </form>
  );
}
