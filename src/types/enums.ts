enum AppType {
  APP_COLETAS,
  APP_RECICLO,
}

enum CollectionStatus {
  ACCEPTED = "ACCEPTED",
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  NOT_STARTED = "NOT_STARTED",
  OPENED = "OPENED",
  PAUSED = "PAUSED",
}

enum MaterialType {
  GLASS = "GLASS",
  HAZARDOUS_MATERIALS = "HAZARDOUS_MATERIALS",
  HOSPITAL_WASTE = "HOSPITAL_WASTE",
  METALS = "METALS",
  NON_RECYCLABLE = "NON_RECYCLABLE",
  ORGANIC_WASTE = "ORGANIC_WASTE",
  PAPERS = "PAPERS",
  PLASTICS = "PLASTICS",
  RADIOACTIVE_MATERIALS = "RADIOACTIVE_MATERIALS",
  WOODS = "WOODS",
}

enum OrganizationType {
  CATADOR = "CATADOR",
  COOPERATIVA = "COOPERATIVA",
  EMPRESA_PRIVADA = "EMPRESA_PRIVADA",
}

enum WeekDays {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
}

export { AppType, CollectionStatus, MaterialType, OrganizationType, WeekDays };
