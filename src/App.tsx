import { FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { SearchBar } from "./components/SearchBar";

import "./global.css";

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [criadas, setCriadas] = useState(0);
  const [concluidas, setConcluidas] = useState(0);

  function handleAddTask(event: FormEvent, task: string) {
    event.preventDefault();
    setTasks([...tasks, task]);
    setCriadas(criadas + 1);
  }

  function handleDeletarTarefa(taskToDelete: string, flag: boolean) {
    const tasksWithoutDeletedOne = tasks.filter(
      (task) => task !== taskToDelete
    );
    setTasks(tasksWithoutDeletedOne);
    setCriadas(criadas - 1);
    if (flag) {
      setConcluidas(concluidas - 1);
    }
  }

  function handleConcluidas(flag: boolean) {
    if (!flag) setConcluidas(concluidas + 1);
    else setConcluidas(concluidas - 1);
  }

  return (
    <div>
      <Header />
      <SearchBar handleAddTask={handleAddTask} />
      <MainContent
        tasks={tasks}
        criadas={criadas}
        concluidas={concluidas}
        handleDeletarTarefa={handleDeletarTarefa}
        handleConcluidas={handleConcluidas}
      />
    </div>
  );
}
