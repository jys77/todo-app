import React, { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { AddTask } from "../AddTask";
import { useSidebarToggle } from "../../context";
export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const { showSidebar, setShowSidebar } = useSidebarToggle();
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="toggle" onClick={() => setShowSidebar(!showSidebar)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li
              data-testid="quick-add-task-action"
              className="settings__add"
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
            >
              +
            </li>
            <li
              data-testid="dark-mode-action"
              className="settings__darkmode"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
