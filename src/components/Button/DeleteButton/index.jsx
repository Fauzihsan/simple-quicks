import { useMutation } from "@apollo/client";
import React from "react";
import { DELETE_TODO } from "../../../api/models/Mutation/DeleteTodo";
import { GET_TODO } from "../../../api/models/Query/GetTodo";
import Loading from "../../Loading";

function DeleteButton(props) {
  // start to delete a task
  const [deleteTodo, { loading: loadingDelete }] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_TODO }],
  });
  const handleDelete = (id) => {
    deleteTodo({
      variables: {
        id,
      },
    });
  };
  //end to delete a task

  return (
    <div className="absolute flex justify-between bg-white border-2 w-1/6 ml-2 mt-6 z-50">
      <button className="text-red-600 p-2" onClick={() => handleDelete(props.id)}>
        Delete
      </button>
      {loadingDelete && <Loading class="my-auto" width="30" height="30" />}
    </div>
  );
}

export default DeleteButton;
