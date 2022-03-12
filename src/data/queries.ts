import { gql } from "@apollo/client";

const LOCATION_FRAGMENT = gql`
  fragment LocationFragment on UserLocation {
    _id
    address {
      _id
      cep
      city
      complement
      country
      district
      number
      state
      street
    }
    comments
    latitude
    longitude
    placename
  }
`;

const AUTHENTICATE_ORGANIZATION = gql`
  query ($authenticateOrganizationInput: AuthenticateOrganizationInput) {
    authenticateOrganization(
      authenticateOrganizationInput: $authenticateOrganizationInput
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

const FIND_ALL_COLLECTION_PATHS_BY_ORGANIZATION_ID_AND_COLLECTION_PATH_STATUS = gql`
  ${LOCATION_FRAGMENT}
  query ($organizationId: ID!, $collectionPathStatus: CollectionPathStatus) {
    findAllCollectionPathsByOrganizationIdAndCollectionPathStatus(
      organizationId: $organizationId
      collectionPathStatus: $collectionPathStatus
    ) {
      _id
      collectionPoints {
        _id
        destination {
          location {
            ...LocationFragment
          }
        }
        location {
          ...LocationFragment
        }
        origin {
          location {
            ...LocationFragment
          }
        }
      }
      collectionPathResponsibleOrganizationUser {
        _id
        name
      }
      collectionPathStatus
      description
      estimatedTimeInMinutes
      name
      totalEstimatedDistance
    }
  }
`;

const FIND_ALL_COLLECTION_REQUESTS_BY_USER_ID_AND_IS_IN_STATUS_ARRAY = gql`
  query ($id: ID!, $statusArray: [CollectionStatus!]!) {
    findAllCollectionRequestsByUserIdAndIsInStatusArray(
      id: $id
      statusArray: $statusArray
    ) {
      _id
      collectionRequestMaterials {
        _id
        amount
        description
        materialType
      }
      collectionStatus
      details
      location {
        address {
          _id
          cep
          city
          complement
          country
          district
          number
          state
          street
        }
        availableDaysAndTimes {
          maxTime {
            hour
            minutes
          }
          minTime {
            hour
            minutes
          }
          weekDay
        }
        comments
        placename
      }
      organization {
        email
        name
      }
    }
  }
`;

const FIND_ALL_COLLECTION_REQUESTS_IN_STATUS_ARRAY = gql`
  query ($statusArray: [CollectionStatus!]!) {
    findAllCollectionRequestsInStatusArray(statusArray: $statusArray) {
      _id
      createdBy {
        name
      }
      collectionRequestMaterials {
        _id
        amount
        description
        materialType
      }
      collectionStatus
      details
      location {
        address {
          _id
          cep
          city
          complement
          country
          district
          number
          state
          street
        }
        availableDaysAndTimes {
          maxTime {
            hour
            minutes
          }
          minTime {
            hour
            minutes
          }
          weekDay
        }
        comments
        placename
      }
      organization {
        email
        name
      }
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
        weekDay
        maxTime {
          hour
          minutes
        }
        minTime {
          hour
          minutes
        }
      }
      comments
      createdAt
      placename
      updatedAt
    }
  }
`;

const FIND_GEOCODING_LOCATION = gql`
  query ($typedLocation: String!) {
    findGeocodingLocation(typedLocation: $typedLocation) {
      items {
        address {
          city
          countryCode
          countryName
          county
          district
          houseNumber
          label
          postalCode
          state
          stateCode
          street
        }
        id
        position {
          lng
          lat
        }
      }
    }
  }
`;

export {
  AUTHENTICATE_ORGANIZATION,
  AUTHENTICATE_ORGANIZATION_USER,
  AUTHENTICATE_USER,
  FIND_ALL_COLLECTION_PATHS_BY_ORGANIZATION_ID_AND_COLLECTION_PATH_STATUS,
  FIND_ALL_COLLECTION_REQUESTS_BY_USER_ID_AND_IS_IN_STATUS_ARRAY,
  FIND_ALL_COLLECTION_REQUESTS_IN_STATUS_ARRAY,
  FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID,
  FIND_ALL_USER_LOCATION_BY_USER_ID,
  FIND_GEOCODING_LOCATION,
};
