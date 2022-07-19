import { ActionType } from "./models/ActionType";
import {Action, State} from "./models/AppContextProps";
import UserInformation from "./models/UserInformation";


export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionType.USER :
            return { ...initialValue, user : action.payload  as UserInformation};
        case ActionType.RESET:
            return initialValue;
        default:
            return state;

    }
}

export const initialValue = {
    user: {} as UserInformation
}