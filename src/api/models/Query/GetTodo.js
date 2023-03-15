import { gql } from "@apollo/client";

export const GET_TODO = gql`
  query GetTodo {
    todo(order_by: { id: desc }) {
      id
      category
      title
      desc
      date
      status
    }
  }
`;
