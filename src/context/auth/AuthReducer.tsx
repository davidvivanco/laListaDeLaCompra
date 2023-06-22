import { authTypes } from "../../shared/models/types";

export const authReducer = (state = {}, action: any) => {

    switch (action.type) {

        case authTypes.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case authTypes.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }

}