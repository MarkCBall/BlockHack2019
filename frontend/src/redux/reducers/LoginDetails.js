import { CHANGE_ADDRESS_TEXT } from "../constants/ActionTypes";
import { HANDLE_PRIVKEY_CHANGE } from "../constants/ActionTypes";

const initialState = {
    addressSignedIn: "0x04d05a4923af4569792cffa8024061a0340a3923",
    addressIsValid: false,
    privKey: "0x5ee6962f33f137e7847c8a2852ed18e5a67159f23b0931baf16a95a009ad3901",
    pubPrivKeypairValid: true,
};

export default function (state = initialState, action) {
    switch (action.type) {

        case CHANGE_ADDRESS_TEXT:
            return {
                ...state,
                addressSignedIn: action.payload.addressSignedIn,
                addressIsValid: action.payload.addressIsValid,
                pubPrivKeypairValid: action.payload.pubPrivKeypairValid
            }

        case HANDLE_PRIVKEY_CHANGE:
            return {
                ...state,
                privKey: action.payload.privKey,
                pubPrivKeypairValid: action.payload.pubPrivKeypairValid
            }

        default:
            return state;
    }
}