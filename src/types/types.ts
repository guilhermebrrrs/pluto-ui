import {
  CollectionStatus,
  MaterialType,
  OrganizationType,
  WeekDays,
} from "./enums";

interface Address extends DateMetadata {
  _id?: string;
  cep?: string;
  city?: string;
  complement?: string;
  country?: string;
  district?: string;
  number?: string;
  state?: string;
  street?: string;
  userLocation?: UserLocation;
}

interface AuthenticateOrganizationInput {
  organizationEmail: string;
  password: string;
}

interface AuthenticateOrganizationUserInput {
  email: string;
  organizationEmail: string;
  password: string;
}

interface AuthenticateUserInput {
  email: string;
  password: string;
}

interface AvailableDayAndTime {
  weekDay: WeekDays;
  maxTime: AvailableTime;
  minTime: AvailableTime;
}

interface AvailableTime {
  hour: number | string;
  minutes: number | string;
}

interface BaseUser extends DateMetadata {
  email: string;
  isActive?: boolean;
  name: string;
  password: string;
  __typename: string;
}

interface CollectionPath extends DateMetadata {
  _id?: string;
  collectionPoints?: CollectionPoint[];
  collectionPathResponsibleOrganizationUser?: OrganizationUser;
  collectionPathStatus?: CollectionStatus;
  description?: string;
  estimatedTimeInMinutes?: number;
  name?: string;
  totalEstimatedDistance?: number;
}

interface CollectionPoint extends DateMetadata {
  _id?: string;
  collectionPath?: CollectionPath;
  collectionRequest?: CollectionRequest;
  destination?: CollectionPoint;
  origin?: CollectionPoint;
}

interface CollectionRequest extends DateMetadata {
  _id?: string;
  acceptedBy?: OrganizationUser;
  canceledOrCompletedBy?: OrganizationUser | User;
  createdBy?: User;
  collectionPoint?: CollectionPoint;
  collectedRequestMaterials?: CollectionRequestMaterial[];
  collectionStatus?: CollectionStatus;
  details?: string;
  location?: UserLocation;
  organization?: Organization;
}

interface CollectionRequestMaterial extends DateMetadata {
  _id?: string;
  amount?: number;
  collectionRequest?: CollectionRequest;
  description?: string;
  materialType?: MaterialType;
}

interface CreateOrganizationUserInput {
  email: string;
  username: string;
  organizationEmail: string;
  password: string;
}

interface CreateUserInput {
  email: string;
  name: string;
  password: string;
}

interface CreateUserLocationAddressInput {
  cep: string;
  city: string;
  complement?: string;
  country: string;
  district: string;
  number: string;
  state: string;
  street: string;
}

interface CreateUserLocationAvailableDaysAndTimesInput {
  weekDay: WeekDays;
  maxTime: CreateUserLocationAvailableTimeInput;
  minTime: CreateUserLocationAvailableTimeInput;
}

interface CreateUserLocationAvailableTimeInput {
  hour: number;
  minutes: number;
}

interface CreateUserLocationInput {
  userId: string;
  address: CreateUserLocationAddressInput;
  availableDaysAndTimes: [CreateUserLocationAvailableDaysAndTimesInput];
  placename: String;
}

interface CreateOrganizationInput {
  email: string;
  cpfCnpj?: string;
  name: string;
  password: string;
  organizationType: OrganizationType;
}

interface DateMetadata {
  createdAt?: Date;
  updatedAt?: Date;
}

interface OrganizationRegistrationValidation {
  cpfCnpjAlreadyExists: boolean;
  emailAlreadyExists: boolean;
  organizationNameAlreadyExists: boolean;
  passwordConstraintDoesntMatch: boolean;
  registrationSucceeded: boolean;
}

interface OrganizationUserRegistrationValidation {
  emailAlreadyExists: boolean;
  emailAndOrganizationAlreadyExists: boolean;
  noOrganizationFound: boolean;
  organizationNameAlreadyExists: boolean;
  organizationWithSameNameAlreadyExists: boolean;
  passwordConstraintDoesntMatch: boolean;
  registrationSucceeded: boolean;
}

interface Organization extends BaseUser {
  _id?: string;
  collectionRequests?: CollectionRequest[];
  cpfCnpj?: string;
  organizationType: OrganizationType;
  users?: OrganizationUser[];
}

interface OrganizationUser extends BaseUser {
  _id?: string;
  collectionRequests?: CollectionRequest[];
  organization?: Organization;
  responsibleForCollectionPaths?: CollectionPath[];
}

interface OrganizationUserPersonalDataInput {
  email: string;
  name: string;
  isActive: boolean;
  password: string;
}

interface UpdateOrganizationUserPersonalDataInput {
  _id: string;
  data: OrganizationUserPersonalDataInput;
}

interface UpdateUserPasswordInput {
  email: string;
  newPassword: string;
  oldPassword: string;
}

interface User extends BaseUser {
  _id?: string;
  collectionRequests?: CollectionRequest[];
  locations?: UserLocation[];
}

interface UserLocation extends DateMetadata {
  _id?: string;
  address?: Address;
  availableDaysAndTimes: AvailableDayAndTime[];
  collectionRequests?: CollectionRequest[];
  latitude?: number;
  longitude?: number;
  placename?: string;
  user?: User;
}

export type {
  Address,
  AuthenticateOrganizationInput,
  AuthenticateOrganizationUserInput,
  AuthenticateUserInput,
  AvailableDayAndTime,
  AvailableTime,
  CollectionPath,
  CollectionPoint,
  CollectionRequest,
  CollectionRequestMaterial,
  CreateOrganizationInput,
  CreateOrganizationUserInput,
  CreateUserInput,
  CreateUserLocationAddressInput,
  CreateUserLocationAvailableDaysAndTimesInput,
  CreateUserLocationAvailableTimeInput,
  CreateUserLocationInput,
  Organization,
  OrganizationRegistrationValidation,
  OrganizationUserRegistrationValidation,
  OrganizationUser,
  OrganizationUserPersonalDataInput,
  UpdateOrganizationUserPersonalDataInput,
  UpdateUserPasswordInput,
  User,
  UserLocation,
};
