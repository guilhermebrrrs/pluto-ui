export { DATA_APP_TYPE, DATA_LOGGED_USER } from "./constants";
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
  removeMultipleFromLocalStorage,
  setIntoLocalStorage,
} from "./localStorageUtils";
