import { SET_PROPERTY, SHOW_GALLERY } from './actions.type';

export const setProperty = (property) => {
  return {
    type: SET_PROPERTY,
    payload: property
  }
};

export const showGallery = (property) => {
  return {
    type: SHOW_GALLERY,
    payload: property
  }
};
