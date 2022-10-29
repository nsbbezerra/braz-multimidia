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

const PUBLISH_ORDER_ITEM = gql`
  mutation PublishMany($id: ID!) {
    publishManyOrderItemsConnection(where: { order: { id: $id } }) {
      aggregate {
        count
      }
    }
  }
`;

const CREATE_ORDER_ITEM = gql`
  mutation CreateOrderItem(
    $quantity: Int!
    $size: String!
    $product: ID!
    $total: Int!
    $order: ID!
  ) {
    createOrderItem(
      data: {
        quantity: $quantity
        total: $total
        size: $size
        product: { connect: { id: $product } }
        order: { connect: { id: $order } }
      }
    ) {
      id
    }
  }
`;

export { CREATE_ORDER, PUBLISH_ORDER, PUBLISH_ORDER_ITEM, CREATE_ORDER_ITEM };
