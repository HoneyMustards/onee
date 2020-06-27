import { SET_PROPERTY, SHOW_GALLERY } from './actions.type';

const initialState = {
    property: {},
    gallery: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROPERTY:
            return {
                ...state,
                property: action.payload
            };
        case SHOW_GALLERY:
            return {
                ...state,
                gallery: action.payload
            };
        default:
            return state
    }
}

