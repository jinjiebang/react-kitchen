import { CHANGE_KEYWORD } from "../actions/action-types";

const initState = {
  keyword: '白菜'
}
export function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_KEYWORD:
      return { ...state, keyword: action.payload }
    default:
      return state
  }
}