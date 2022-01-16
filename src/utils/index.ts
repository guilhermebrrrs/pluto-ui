export { APP_TYPE, LOGGED_USER } from "./constants";
export { definitions } from "./definitions";

export {
  capitalizeName,
  capitalizeString,
  getMaterialTypeLabel,
  getWeekDayLabel,
  initApolloClient,
  isNullOrBlank,
  isSomeItemOfArrayNullOrBlank,
  sortByString,
  transformEnumValueToCapitalizeString,
} from "./functions";

export {
  clearLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  setIntoLocalStorage,
} from "./localStorageUtils";
