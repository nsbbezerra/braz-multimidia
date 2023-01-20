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

const FIND_ORDER = gql`
  query FindOrder($email: String!) {
    orders(where: { email: $email }, orderBy: createdAt_DESC, last: 15) {
      id
      name
      phone
      email
      city
      state
      information
      items
      statusSale
      createdAt
      total
      rastreio
    }
  }
`;

const FIND_ORDERS_PAG = gql`
  query FindCount($page: Int!) {
    ordersConnection(skip: $page, last: 20) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
    }
    orders(skip: $page, orderBy: createdAt_DESC, last: 20) {
      id
      name
      phone
      email
      city
      state
      information
      items
      statusSale
      createdAt
      total
      rastreio
    }
  }
`;

const FIND_ORDERS_PAG_NAME = gql`
  query FindCount($page: Int!, $name: String!) {
    ordersConnection(skip: $page, last: 20) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
    }
    orders(
      where: { name_contains: $name }
      skip: $page
      orderBy: createdAt_DESC
      last: 20
    ) {
      id
      name
      phone
      email
      city
      state
      information
      items
      statusSale
      createdAt
      total
      rastreio
    }
  }
`;

const FIND_ORDERS_PAG_EMAIL = gql`
  query FindCount($page: Int!, $name: String!) {
    ordersConnection(skip: $page, last: 20) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
    }
    orders(
      where: { email: $name }
      skip: $page
      orderBy: createdAt_DESC
      last: 20
    ) {
      id
      name
      phone
      email
      city
      state
      information
      items
      statusSale
      createdAt
      total
      rastreio
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

const UPDATE_STATUS = gql`
  mutation UpdateStatus($id: ID!, $statusSale: String!) {
    updateOrder(where: { id: $id }, data: { statusSale: $statusSale }) {
      id
    }
  }
`;

const UPDATE_SHIPPING = gql`
  mutation UpdateStatus($id: ID!, $rastreio: String!) {
    updateOrder(where: { id: $id }, data: { rastreio: $rastreio }) {
      id
    }
  }
`;

export {
  CREATE_ORDER,
  PUBLISH_ORDER,
  FIND_ORDER,
  FIND_ORDERS_PAG,
  UPDATE_STATUS,
  FIND_ORDERS_PAG_NAME,
  FIND_ORDERS_PAG_EMAIL,
  UPDATE_SHIPPING,
};
