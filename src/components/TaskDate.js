import React from "react";
import moment from "moment";
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from "react-icons/fa";

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  return (
    showTaskDate && (
      <div className="task-date" data-testid="task-date-overlay">
        <ul className="task-date__list">
          <li>
            <div
              onClick={() => {
                setTaskDate(moment().format("DD/MM/YYYY"));
                setShowTaskDate(false);
              }}
              onKeyDown={() => {
                setTaskDate(moment().format("DD/MM/YYYY"));
                setShowTaskDate(false);
              }}
              data-testid="task-date-today"
              tabIndex={0}
              role="button"
              aria-label="Select today as the task date"
            >
              <span>
                <FaSpaceShuttle />
              </span>
              <span>Today</span>
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
                setShowTaskDate(false);
              }}
              onKeyDown={() => {
                setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
                setShowTaskDate(false);
              }}
              data-testid="task-date-tomorrow"
              tabIndex={0}
              role="button"
              aria-label="Select tomorrow as the task date"
            >
              <span>
                <FaSun />
              </span>
              <span>Tomorrow</span>
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
                setShowTaskDate(false);
              }}
              onKeyDown={() => {
                setTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
                setShowTaskDate(false);
              }}
              data-testid="task-date-next-week"
              tabIndex={0}
              role="button"
              aria-label="Select next seven days as the task date"
            >
              <span>
                <FaRegPaperPlane />
              </span>
              <span>Next week</span>
            </div>
          </li>
        </ul>
      </div>
    )
  );
};
