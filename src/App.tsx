import {AppContextProps} from "./models/AppContextProps";
import React, {useReducer} from "react";
import {initialValue, reducer} from "./reducer";
import UserInformation from "./models/UserInformation";
import {ActionType} from "./models/ActionType";
import CallbackUse from "./CallbackUse";

// usage of useContext 
export const AppContext = React.createContext({} as AppContextProps)

const App = () => {
    //useReducer fuctionality
    //reducer is the function which handles switch case functionality
    //useReducer required initialValue -- to be set , Althought we can also provide Lazy initialization
    const [state, dispatch] = useReducer(reducer, initialValue);
    const commonContext = {
        state: state, dispatch: dispatch
    }

    // this data we can fetch using ramdonuser get api later on with Axios.get
    

    //dispatching of state for user info
    if (state.user && Object.keys(state.user).length === 0) {
        const data: UserInformation = {name: "Rohit", pid: "1", role: "RM"};
        dispatch({type: ActionType.USER, payload: data as UserInformation});
        console.log(`${state.user.name}`);
    }

    return <AppContext.Provider value={commonContext}>
        <div>{`${state.user.name}`}</div>
        <CallbackUse></CallbackUse>
    </AppContext.Provider>

}

export default App;
