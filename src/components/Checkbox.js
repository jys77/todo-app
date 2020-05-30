import React from "react";
import { firebase } from "../firebase";

export const Checkbox = ({ id, taskDesc }) => {
  const archivedTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({
      archived: true,
    });
  };
  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archivedTask()}
      onKeyDown={() => archivedTask()}
      role="button"
      tabIndex={0}
      aria-label={`Mark ${taskDesc} as done?`}
    >
      <span className="checkbox" />
    </div>
  );
};
