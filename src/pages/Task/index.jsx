import React from "react";

function Task(props) {
  return (
    <div className={`${props.showTask !== true ? "hidden" : "bg-primary-white"} absolute right-10 w-3/4 h-3/4 mt-5 rounded-2xl`}>
      <h1>TASK AREA</h1>
    </div>
  );
}

export default Task;
