import { gql } from "@apollo/client";

const CREATE_ORGANIZATION = gql`
  mutation ($createOrganizationInput: CreateOrganizationInput) {
    createOrganization(createOrganizationInput: $createOrganizationInput) {
      cpfCnpjAlreadyExists
      emailAlreadyExists
      registrationSucceeded
    }
  }
`;

const CREATE_ORGANIZATION_USER = gql`
  mutation ($createOrganizationUserInput: CreateOrganizationUserInput) {
    createOrganizationUser(
      createOrganizationUserInput: $createOrganizationUserInput
    ) {
      emailAlreadyExists
      emailAndOrganizationAlreadyExists
      noOrganizationFound
      organizationNameAlreadyExists
      organizationWithSameNameAlreadyExists
      passwordConstraintDoesntMatch
      registrationSucceeded
    }
  }
`;

const CREATE_USER = gql`
  mutation ($createUserInput: CreateUserInput) {
    createUser(createUserInput: $createUserInput)
  }
`;

const DELETE_ORGANIZATION_USER_BY_ID = gql`
  mutation ($id: ID) {
    deleteOrganizationUserById(id: $id)
  }
`;

export {
  CREATE_ORGANIZATION,
  CREATE_ORGANIZATION_USER,
  CREATE_USER,
  DELETE_ORGANIZATION_USER_BY_ID,
};
