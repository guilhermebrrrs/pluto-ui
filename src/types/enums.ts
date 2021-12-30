enum AppType {
  APP_COLETAS,
  APP_RECICLO,
}

enum CollectionStatus {
  ACCEPTED,
  CANCELED,
  COMPLETED,
  NOT_STARTED,
  OPENED,
  PAUSED,
}

enum MaterialType {
  GLASS,
  HAZARDOUS_MATERIALS,
  HOSPITAL_WASTE,
  METALS,
  NON_RECYCLABLE,
  ORGANIC_WASTE,
  PAPERS,
  PLASTICS,
  RADIOACTIVE_MATERIALS,
  WOODS,
}

enum OrganizationType {
  CATADOR = "CATADOR",
  COOPERATIVA = "COOPERATIVA",
  EMPRESA_PRIVADA = "EMPRESA_PRIVADA",
}

enum WeekDays {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export { AppType, CollectionStatus, MaterialType, OrganizationType, WeekDays };
