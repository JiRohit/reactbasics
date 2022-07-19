import {Action, State} from "./AppContextProps";
import UserInformation from "./UserInformation";


export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "USER" :
            return { ...initialValue, user : action.payload  as UserInformation};
        case "RESET":
            return initialValue;
        default:
            return state;

    }
}

export const initialValue = {
    user: { } as UserInformation
}