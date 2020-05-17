import { CHANGE_KEYWORD } from "./action-types";

export const changeKeyword = (payload) => {
  return { type: CHANGE_KEYWORD, payload }
}