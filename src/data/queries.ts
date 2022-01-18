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
      email
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
  query ($id: ID!) {
    findAllOrganizationUsersByOrganizationId(id: $id) {
      _id
      createdAt
      email
      isActive
      name
      password
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

const FIND_ALL_USER_LOCATION_BY_USER_ID = gql`
  query ($id: ID!) {
    findAllUserLocationsByUserId(id: $id) {
      _id
      address {
        _id
        cep
        city
        complement
        country
        createdAt
        district
        number
        state
        street
        updatedAt
      }
      availableDaysAndTimes {
        day
        maxTime {
          hour
          minutes
        }
        minTime {
          hour
          minutes
        }
      }
      createdAt
      placename
      updatedAt
    }
  }
`;

export {
  AUTHENTICATE_ORGANIZATION,
  AUTHENTICATE_ORGANIZATION_USER,
  AUTHENTICATE_USER,
  FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID,
  FIND_ALL_USER_LOCATION_BY_USER_ID,
};
