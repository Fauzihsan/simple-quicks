import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_TODO } from "../../api/models/Query/GetTodo";
import FormTodo from "../../components/Form/FormTodo";
import Loading from "../../components/Loading";
import Todo from "../../components/Todo";

function Task(props) {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { data: allTodo, loading: loadingTodo } = useQuery(GET_TODO);

  const handleButtonClick = () => {
    setIsMenuShown(!isMenuShown);
  };

  const [showNewTask, setShowNewTask] = useState(false);

  const [filter, setFilter] = useState("all");

  const handleFilter = (type) => {
    setIsMenuShown(false);
    type === "urgent" ? setFilter("urgent") : setFilter("all");
  };

  return (
    <div className={`${props.showTask !== true ? "hidden" : "bg-white"} absolute right-10 w-3/4 h-3/4 mt-5 rounded-md overflow-y-auto no-scrollbar`}>
      <div className="py-3 px-7 bg-white rounded-md fixed w-3/4 z-50">
        <button className="bg-white border-2 text-[#4a4a4a] p-2 rounded-md" onClick={handleButtonClick}>
          My Tasks
          <svg className="inline ml-4" width="12" height="12" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.15 10.09L18.377 8.31695L11.3475 15.3338V0.0300293H8.83253V15.3338L1.81568 8.30438L0.0300293 10.09L10.09 20.15L20.15 10.09Z" fill="#4a4a4a" />
          </svg>
        </button>
        <button className="bg-primary-blue float-right text-white p-2 rounded-md" onClick={() => setShowNewTask(!showNewTask)}>
          New Task
        </button>
        {isMenuShown && (
          <div className="absolute bg-white w-1/4 border-2 ml-2 mt-2 z-50">
            <button className="text-[#4a4a4a] p-2" onClick={() => handleFilter("all")}>
              Personal Errands
            </button>
            <hr />
            <button className="text-[#4a4a4a] p-2" onClick={() => handleFilter("urgent")}>
              Urgent To-Do
            </button>
          </div>
        )}
      </div>
      <div className="mt-20 px-8">
        {loadingTodo ? (
          <div className="mt-24">
            <Loading width="86" height="86" class="m-auto" />
            <p className="text-center">Loading Task List ...</p>
          </div>
        ) : (
          <div className="todo border-b-4 pb-5">
            {filter === "urgent"
              ? allTodo?.todo
                  .filter((d) => new Date(d.date).toDateString() === new Date().toDateString())
                  .map((d) => (
                    <div key={d.id} className="mt-5">
                      <Todo d={d} />
                    </div>
                  ))
              : allTodo?.todo.map((d) => (
                  <div key={d.id} className="mt-5">
                    <Todo d={d} />
                  </div>
                ))}
          </div>
        )}
        {showNewTask && <FormTodo setShowNewTask={setShowNewTask} />}
      </div>
    </div>
  );
}

export default Task;
