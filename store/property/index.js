import { SET_PROPERTY } from './actions.type';

const initialState = {
    property: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROPERTY:
            return {
                ...state,
                property: action.payload
            };
        default:
            return state
    }
}

