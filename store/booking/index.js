import { NEXT_STEP, PREV_STEP, SET_BOOKING } from './actions.type';

const initialState = {
    step: 1,
    property: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEXT_STEP:
            return {
                ...state,
                step: state.step + 1
            };
        case PREV_STEP:
            return {
                ...state,
                step: state.step - 1
            };
        case SET_BOOKING:
            return {
                ...state,
                property: action.payload
            };
        default:
            return state
    }
}

