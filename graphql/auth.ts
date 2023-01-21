import { gql } from "urql";

const AUTH_PANEL = gql`
  query Auth($usuario: String!) {
    usuariosMaster(where: { usuario: $usuario }) {
      id
      senha
    }
  }
`;

export { AUTH_PANEL };
