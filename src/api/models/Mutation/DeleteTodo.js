import { gql } from "@apollo/client";

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    delete_todo_by_pk(id: $id) {
      id
    }
  }
`;
