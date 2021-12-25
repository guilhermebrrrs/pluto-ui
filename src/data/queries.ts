import { gql } from "@apollo/client";

export const AUTHENTICATE_USER = gql`
  query authenticateUser($authenticateUserInput: AuthenticateUserInput) {
    authenticateUser(authenticateUserInput: $authenticateUserInput) {
      _id
      createdAt
      email
      isActive
      name
      password
      updatedAt
    }
  }
`;
