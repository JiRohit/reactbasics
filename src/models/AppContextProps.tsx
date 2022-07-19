import UserInformation from "./UserInformation";


export interface State {
    user: UserInformation;
}

export interface Action {
     type: String;
     payload: UserInformation;
}

export interface AppContextProps {
state: State;
dispatch: (action: Action) => void;
}