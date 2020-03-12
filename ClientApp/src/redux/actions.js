import { CHANGE_MODAL_VISIBLE, TOGGLE_USER_BLOCK, SET_USER_BLOCK } from "./action-types";

export const showModalAction = record => {
  return {
    type: CHANGE_MODAL_VISIBLE,
    userData: record
  };
};

export const toggleUserBlockAction = id => {
  return {
    type: TOGGLE_USER_BLOCK,
    userId: id
  };
};

export const setUserBlockAction = id => {
    return {
        type: SET_USER_BLOCK,
        userId: id
    };
};