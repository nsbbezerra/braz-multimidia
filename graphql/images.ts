import { gql } from "urql";

const FIND_IMAGES = gql`
  query FindImages {
    imagePages(last: 1) {
      banner {
        id
        url
      }
      simulatorImage {
        id
        url
      }
      imagesWhoIAm {
        id
        url
      }
      bannerProducts {
        id
        url
      }
      bannerOther {
        id
        url
      }
      bannerCart {
        id
        url
      }
    }
  }
`;

export { FIND_IMAGES };
