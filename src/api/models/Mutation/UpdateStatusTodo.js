import { gql } from "@apollo/client";

export const UPDATE_TODO = gql`
  mutation UpdateStatusTodo($id: Int!, $status: Boolean, $title: String = "", $desc: String = "", $date: date = "") {
    update_todo_by_pk(pk_columns: { id: $id }, _set: { status: $status, title: $title, desc: $desc, date: $date }) {
      id
    }
  }
`;
