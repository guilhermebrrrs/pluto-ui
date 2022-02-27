import { gql } from "@apollo/client";

const CREATE_COLLECTION_PATH = gql`
  mutation ($createCollectionPathInput: CreateCollectionPathInput) {
    createCollectionPath(createCollectionPathInput: $createCollectionPathInput)
  }
`;

const CREATE_COLLECTION_REQUEST = gql`
  mutation ($createCollectionRequestInput: CreateCollectionRequestInput) {
    createCollectionRequest(
      createCollectionRequestInput: $createCollectionRequestInput
    )
  }
`;

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

const CREATE_USER_LOCATION = gql`
  mutation ($createUserLocationInput: CreateUserLocationInput) {
    createUserLocation(createUserLocationInput: $createUserLocationInput)
  }
`;

const DELETE_COLLECTION_REQUEST_BY_ID = gql`
  mutation ($id: ID!) {
    deleteCollectionRequestById(id: $id)
  }
`;

const DELETE_ORGANIZATION_USER_BY_ID = gql`
  mutation ($id: ID) {
    deleteOrganizationUserById(id: $id)
  }
`;

const DELETE_USER_LOCATION_BY_ID = gql`
  mutation ($id: ID!) {
    deleteUserLocationById(id: $id)
  }
`;

const UPDATE_ORGANIZATION_USER_PERSONAL_DATA = gql`
  mutation (
    $updateOrganizationUserPersonalDataInput: UpdateOrganizationUserPersonalDataInput
  ) {
    updateOrganizationUserPersonalData(
      updateOrganizationUserPersonalDataInput: $updateOrganizationUserPersonalDataInput
    )
  }
`;

const UPDATE_USER_LOCATION = gql`
  mutation ($updateUserLocationInput: UpdateUserLocationInput) {
    updateUserLocation(updateUserLocationInput: $updateUserLocationInput)
  }
`;

export {
  CREATE_COLLECTION_PATH,
  CREATE_COLLECTION_REQUEST,
  CREATE_ORGANIZATION,
  CREATE_ORGANIZATION_USER,
  CREATE_USER,
  CREATE_USER_LOCATION,
  DELETE_COLLECTION_REQUEST_BY_ID,
  DELETE_ORGANIZATION_USER_BY_ID,
  DELETE_USER_LOCATION_BY_ID,
  UPDATE_ORGANIZATION_USER_PERSONAL_DATA,
  UPDATE_USER_LOCATION,
};
