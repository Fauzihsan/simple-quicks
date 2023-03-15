import { gql } from "@apollo/client";

export const INSERT_TODO = gql`
  mutation InsertTodo($category: String = "", $date: date = "", $desc: String = "", $status: Boolean = false, $title: String = "") {
    insert_todo(objects: { category: $category, date: $date, desc: $desc, status: $status, title: $title }) {
      returning {
        id
      }
    }
  }
`;
