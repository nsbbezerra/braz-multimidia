import { gql } from "urql";

const FIND_CATEGORIES_PATH = gql`
  query FindCategoriesPath {
    categories(last: 50) {
      id
    }
  }
`;

const FIND_CATEGORIES_INFORMATION = gql`
  query FindCategoriesPath($id: ID!) {
    banners(where: { page: Produtos }) {
      id
      desktop {
        id
        url
      }
      mobile {
        id
        url
      }
    }
    categories(last: 50) {
      id
      name
    }
    category(where: { id: $id }) {
      id
      name
      products {
        id
        name
        price
        images {
          id
          url
        }
      }
      collections(last: 1) {
        id
        images {
          id
          url
        }
      }
    }
  }
`;

export { FIND_CATEGORIES_PATH, FIND_CATEGORIES_INFORMATION };
