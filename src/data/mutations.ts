import { gql } from "@apollo/client";

const CREATE_ORGANIZATION = gql`
  mutation createOrganization(
    $createOrganizationInput: CreateOrganizationInput
  ) {
    createOrganization(createOrganizationInput: $createOrganizationInput) {
      cpfCnpjAlreadyExists
      emailAlreadyExists
      registrationSucceeded
    }
  }
`;

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput) {
    createUser(createUserInput: $createUserInput)
  }
`;

export { CREATE_ORGANIZATION, CREATE_USER };
