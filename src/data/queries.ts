import { gql } from "@apollo/client";

const AUTHENTICATE_ORGANIZATION = gql`
  query ($autheticateOrganizationInput: AuthenticateOrganizationInput) {
    authenticateOrganization(
      authenticateOrganizationInput: $autheticateOrganizationInput
    ) {
      _id
      cpfCnpj
      createdAt
      email
      isActive
      name
      organizationType
      password
      updatedAt
      __typename
    }
  }
`;

const AUTHENTICATE_ORGANIZATION_USER = gql`
  query (
    $authenticateOrganizationUserInput: AuthenticateOrganizationUserInput
  ) {
    authenticateOrganizationUser(
      authenticateOrganizationUserInput: $authenticateOrganizationUserInput
    ) {
      _id
      createdAt
      name
      organization {
        _id
        cpfCnpj
        createdAt
        email
        isActive
        name
        organizationType
        updatedAt
      }
      updatedAt
      __typename
    }
  }
`;

const AUTHENTICATE_USER = gql`
  query ($authenticateUserInput: AuthenticateUserInput) {
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

const FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID = gql`
  query ($findAllOrganizationUsersByOrganizationIdId: ID!) {
    findAllOrganizationUsersByOrganizationId(
      id: $findAllOrganizationUsersByOrganizationIdId
    ) {
      _id
      createdAt
      name
      updatedAt
      organization {
        _id
        createdAt
        cpfCnpj
        email
        isActive
        name
        organizationType
        password
        updatedAt
      }
    }
  }
`;

export {
  AUTHENTICATE_ORGANIZATION,
  AUTHENTICATE_ORGANIZATION_USER,
  AUTHENTICATE_USER,
  FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID,
};
