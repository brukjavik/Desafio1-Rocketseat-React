import { FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { SearchBar } from "./components/SearchBar";

import "./global.css";

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [criadas, setCriadas] = useState(0);

  function handleAddTask(event: FormEvent, task: string) {
    event.preventDefault();
    setTasks([...tasks, task]);
    setCriadas(criadas + 1);
  }

  function handleDeletarTarefa(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(
      (task) => task !== taskToDelete
    );
    setTasks(tasksWithoutDeletedOne);
    setCriadas(criadas - 1);
  }

  console.log(tasks);

  return (
    <div>
      <Header />
      <SearchBar handleAddTask={handleAddTask} />
      <MainContent
        tasks={tasks}
        criadas={criadas}
        handleDeletarTarefa={handleDeletarTarefa}
      />
    </div>
  );
}
