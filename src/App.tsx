import {AppContextProps} from "./AppContextProps";
import React, {useReducer} from "react";
import {initialValue, reducer} from "./reducer";
import UserInformation from "./UserInformation";

// usage of useContext 
export const AppContext = React.createContext({} as AppContextProps)

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const commonContext = {
        state: state, dispatch: dispatch
    }

    const data:UserInformation = {name: "Rohit", pid: "Mpid", role: "RM"} ;
    if(state) {
        dispatch({type: "USER", payload : data as UserInformation});
    }

    <AppContext.Provider value={commonContext}>
        <div>{`${data}`}</div>
    </AppContext.Provider>

}

export default App;
