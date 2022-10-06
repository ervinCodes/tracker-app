import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "test",
      other: "no-show",
      day: "monday",
      reminder: true,
    },
    {
      text: "Test4",
      day: "Wednesday",
      reminder: false,
      id: 3,
    },
    {
      text: "Task6",
      day: "Thursday",
      reminder: true,
      id: 4,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to display"
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default App;
