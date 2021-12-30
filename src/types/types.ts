import { CollectionStatus, MaterialType, OrganizationType } from "./enums";

interface Address extends DateMetadata {
  _id?: string;
  cep?: string;
  city?: string;
  complement?: string;
  country?: string;
  number?: string;
  state?: string;
  street?: string;
  userLocation?: UserLocation;
}

interface AuthenticateUserInput {
  email: string;
  password: string;
}

interface BaseUser extends DateMetadata {
  email?: string;
  isActive?: boolean;
  name?: string;
  password?: string;
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

interface CreateUserInput {
  email: string;
  name: string;
  password: string;
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

interface Organization extends BaseUser {
  _id?: string;
  collectionRequests?: CollectionRequest[];
  cpfCnpj?: string;
  organizationType?: OrganizationType;
  users?: OrganizationUser[];
}

interface OrganizationRegistrationValidation {
  cpfCnpjAlreadyExists: boolean;
  emailAlreadyExists: boolean;
  organizationNameAlreadyExists: boolean;
  passwordConstraintDoesntMatch: boolean;
  registrationSucceeded: boolean;
}

interface OrganizationUser
  extends Omit<BaseUser, "email" & "isActive" & "password"> {
  _id?: string;
  collectionRequests: CollectionRequest[];
  organization?: Organization;
  responsibleForCollectionPaths?: CollectionPath[];
  userLoginKeys?: OrganizationUserLoginKey[];
}

interface OrganizationUserLoginKey {
  _id: string;
  organization?: Organization;
  email?: string;
  isActive?: boolean;
  password?: string;
  organizationUser: OrganizationUser;
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
  collectionRequests?: CollectionRequest[];
  latitude?: number;
  longitude?: number;
  placename?: string;
  user?: User;
}

export type {
  Address,
  AuthenticateUserInput,
  CollectionPath,
  CollectionPoint,
  CollectionRequest,
  CollectionRequestMaterial,
  CreateUserInput,
  CreateOrganizationInput,
  Organization,
  OrganizationRegistrationValidation,
  OrganizationUser,
  OrganizationUserLoginKey,
  UpdateUserPasswordInput,
  User,
  UserLocation,
};
