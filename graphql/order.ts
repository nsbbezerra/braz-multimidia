import { gql } from "urql";

const CREATE_ORDER = gql`
  mutation CreateOrder(
    $name: String!
    $email: String!
    $total: Int!
    $phone: String!
    $city: String!
    $state: String!
    $information: String!
    $items: Json!
    $statusSale: String!
  ) {
    createOrder(
      data: {
        name: $name
        email: $email
        total: $total
        phone: $phone
        city: $city
        state: $state
        information: $information
        items: $items
        statusSale: $statusSale
      }
    ) {
      id
    }
  }
`;

const PUBLISH_ORDER = gql`
  mutation PublishOrder($id: ID!) {
    publishOrder(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;

export { CREATE_ORDER, PUBLISH_ORDER };
