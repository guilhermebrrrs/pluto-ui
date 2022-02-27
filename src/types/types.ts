import {
  CollectionPathStatus,
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

interface AvailableDayAndTimeInput {
  weekDay: WeekDays;
  maxTime: AvailableTimeInput;
  minTime: AvailableTimeInput;
}

interface AvailableTimeInput {
  hour: number;
  minutes: number;
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
  collectionPathStatus?: CollectionPathStatus;
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
  location?: UserLocation;
  origin?: CollectionPoint;
}

interface CollectionRequest extends DateMetadata {
  _id?: string;
  acceptedBy?: Organization | OrganizationUser;
  canceledOrCompletedBy?: Organization | OrganizationUser | User;
  createdBy?: User;
  collectionPoint?: CollectionPoint;
  collectionRequestMaterials?: CollectionRequestMaterial[];
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

interface CreateCollectionPathInput {
  description?: string;
  name: string;
  organizationId: string;
}

interface CreateCollectionRequestInput {
  collectionRequestMaterials: CreateCollectionRequestMaterialInput[];
  details?: string;
  locationId: string;
  userId: string;
}

interface CreateCollectionRequestMaterialInput {
  amount?: number;
  description?: string;
  materialType: MaterialType;
}

interface CreateOrganizationInput {
  email: string;
  cpfCnpj?: string;
  name: string;
  password: string;
  organizationType: OrganizationType;
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
  comments: string;
  placename: string;
  latitude: number;
  longitude: number;
}

interface DateMetadata {
  createdAt?: Date;
  updatedAt?: Date;
}

interface GraphHopperGeocodingResponseSchema {
  hits?: GraphHopperGeocodingLocation[];
  took?: number;
}

interface GraphHopperGeocodingLocation {
  city?: string;
  country?: string;
  houseNumber?: string;
  name?: string;
  osm_id?: string;
  osm_key?: string;
  osm_type?: string;
  point?: GraphHopperGeocodingPoint;
  postcode?: string;
  state?: string;
  street?: string;
}

interface GraphHopperGeocodingPoint {
  lat?: number;
  lng?: number;
}

interface HereMapsGeocodingAddress {
  label?: string;
  countryCode?: string;
  countryName?: string;
  stateCode?: string;
  state?: string;
  county?: string;
  city?: string;
  district?: string;
  street?: string;
  postalCode?: string;
  houseNumber?: string;
}

interface HereMapsGeocodingFieldScore {
  city?: number;
  streets?: number[];
  houseNumber?: number;
}

interface HereMapsGeocodingLocation {
  title?: string;
  id?: string;
  resultType?: string;
  houseNumberType?: string;
  address?: HereMapsGeocodingAddress;
  position?: HereMapsGeocodingPosition;
  access?: HereMapsGeocodingPosition[];
  mapView?: HereMapsGeocodingMapView;
  scoring?: HereMapsGeocodingScoring;
}

interface HereMapsGeocodingMapView {
  west?: number;
  south?: number;
  east?: number;
  north?: number;
}

interface HereMapsGeocodingPosition {
  lat?: number;
  lng?: number;
}

interface HereMapsGeocodingResponseSchema {
  items?: HereMapsGeocodingLocation[];
}

interface HereMapsGeocodingScoring {
  queryScore?: number;
  fieldScore?: HereMapsGeocodingFieldScore;
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
  collectionPaths?: CollectionPath[];
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

interface UpdateUserLocationAddressInput {
  _id: string;
  cep: string;
  city: string;
  complement?: string;
  country: string;
  district: string;
  number: string;
  state: string;
  street: string;
}

interface UpdateUserLocationInput {
  _id: string;
  address: UpdateUserLocationAddressInput;
  availableDaysAndTimes: [AvailableDayAndTime];
  comments: string;
  placename: string;
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
  comments?: string;
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
  AvailableDayAndTimeInput,
  AvailableTime,
  AvailableTimeInput,
  CollectionPath,
  CollectionPoint,
  CollectionRequest,
  CollectionRequestMaterial,
  CreateCollectionPathInput,
  CreateCollectionRequestInput,
  CreateCollectionRequestMaterialInput,
  CreateOrganizationInput,
  CreateOrganizationUserInput,
  CreateUserInput,
  CreateUserLocationAddressInput,
  CreateUserLocationAvailableDaysAndTimesInput,
  CreateUserLocationAvailableTimeInput,
  CreateUserLocationInput,
  GraphHopperGeocodingLocation,
  GraphHopperGeocodingPoint,
  GraphHopperGeocodingResponseSchema,
  HereMapsGeocodingAddress,
  HereMapsGeocodingFieldScore,
  HereMapsGeocodingLocation,
  HereMapsGeocodingMapView,
  HereMapsGeocodingPosition,
  HereMapsGeocodingResponseSchema,
  HereMapsGeocodingScoring,
  Organization,
  OrganizationRegistrationValidation,
  OrganizationUser,
  OrganizationUserPersonalDataInput,
  OrganizationUserRegistrationValidation,
  UpdateOrganizationUserPersonalDataInput,
  UpdateUserLocationAddressInput,
  UpdateUserLocationInput,
  UpdateUserPasswordInput,
  User,
  UserLocation,
};
