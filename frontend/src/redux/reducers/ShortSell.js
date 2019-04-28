import { GET_LOCATES } from "../constants/ActionTypes";

const initialState = {
    locates:{}
};

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_LOCATES:
            return {
                ...state,
                locates:action.payload
            }

        default:
            return state;
    }
}