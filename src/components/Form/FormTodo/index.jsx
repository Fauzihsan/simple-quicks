import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { INSERT_TODO } from "../../../api/models/Mutation/InsertTodo";
import { GET_TODO } from "../../../api/models/Query/GetTodo";
import Loading from "../../Loading";

function FormTodo(props) {
  //accordion for new task button
  const [accordionNewTask, setAccordionNewTask] = useState(true);

  //initial data for a task
  const INITIAL_DATA = {
    title: "",
    date: "",
    desc: "",
    status: false,
    category: "personal errands",
  };

  const [newTask, setNewTask] = useState(INITIAL_DATA);

  // when a cursor blur & all the field has been assigned, form will be submitted
  const handleBlur = () => {
    if (newTask.title !== "" && newTask.desc !== "" && newTask.date !== "") {
      handleSubmit();
    }
  };

  // start to post a new todo
  const [insertTodo, { loading: loadingInsert }] = useMutation(INSERT_TODO, {
    onCompleted: () => {
      props.setShowNewTask(false);
      setNewTask(INITIAL_DATA);
    },
    refetchQueries: [{ query: GET_TODO }],
  });

  const handleSubmit = () => {
    insertTodo({
      variables: {
        category: newTask.category,
        date: newTask.date,
        desc: newTask.desc,
        status: newTask.status,
        title: newTask.title,
      },
    });
  };
  // end to post a new todo

  return (
    <form>
      <div className="todo border-b-4 pb-5 mt-4">
        <div className="flex justify-between">
          <div className="left flex gap-x-5 w-1/2 my-auto">
            <input type="checkbox" name="" id="" />
            <input type="text" onBlur={handleBlur} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} name="title" className="border-2 border-gray-500 rounded-md p-3 w-full" placeholder="Type Task Title" />
          </div>
          <div className="right flex gap-x-5 justify-end mb-auto w-1/2 ">
            <button type="button" onClick={() => setAccordionNewTask(!accordionNewTask)}>
              <svg className={`${!accordionNewTask && "rotate-180"}`} width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.175 7.08753L5 3.27086L8.825 7.08752L10 5.91252L5 0.912526L-1.02722e-07 5.91253L1.175 7.08753Z" fill="#4F4F4F" />
              </svg>
            </button>
            <button type="button">
              <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z"
                  fill="#828282"
                />
              </svg>
            </button>
          </div>
        </div>

        {accordionNewTask && (
          <div className="flex">
            <div className="flex flex-col">
              <div className="datetime flex gap-5 px-5 mt-5">
                <span className="my-auto">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.99181 0.666626C4.39181 0.666626 0.666809 4.39996 0.666809 8.99996C0.666809 13.6 4.39181 17.3333 8.99181 17.3333C13.6001 17.3333 17.3335 13.6 17.3335 8.99996C17.3335 4.39996 13.6001 0.666626 8.99181 0.666626ZM9.0003 15.6666C5.31697 15.6666 2.33364 12.6833 2.33364 8.99996C2.33364 5.31662 5.31697 2.33329 9.0003 2.33329C12.6836 2.33329 15.667 5.31662 15.667 8.99996C15.667 12.6833 12.6836 15.6666 9.0003 15.6666ZM8.16681 4.83329H9.41681V9.20829L13.1668 11.4333L12.5418 12.4583L8.16681 9.83329V4.83329Z"
                      fill="#4a4a4a"
                    />
                  </svg>
                </span>
                <input type="date" onBlur={handleBlur} name="" id="" onChange={(e) => setNewTask({ ...newTask, date: e.target.value })} className="border-2 border-gray-500 px-5 py-2 rounded-md" />
              </div>
              <div className="desc flex gap-5 px-5 mt-5">
                <span>
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z"
                      fill="#4a4a4a"
                    />
                  </svg>
                </span>
                <textarea onBlur={handleBlur} name="" id="" onChange={(e) => setNewTask({ ...newTask, desc: e.target.value })} cols="50" rows="2" placeholder="No Description" className="p-2"></textarea>
              </div>
            </div>
            {loadingInsert && <Loading width="80" height="80" class="mx-auto" />}
          </div>
        )}
      </div>
    </form>
  );
}

export default FormTodo;
