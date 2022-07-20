import Axios, {AxiosError, AxiosResponse} from "axios";
import {useCallback, useContext, useMemo, useRef, useState} from "react";
import {AppContext} from "./App";
import UserInfo from "./models/UserInfo";

const CallbackUse = () => {
    //userId can be used as a Prod here // mostly it will be impact of state change due to user Input
//const [userId, setUserId] = useState("");
    const appContext = useContext(AppContext);
const count = useRef(0);
    const [user, setUser] = useState({} as UserInfo);
    //creating a useCallback -- for using the function .. this function will not change unless userId changes
    const fetchUser = useCallback(
        async (): Promise<UserInfo> => {
            const url: String = `https://jsonplaceholder.typicode.com/users/${appContext.state.user.pid}`;
            return await Axios.get(url.toString())
                .then((response: AxiosResponse<UserInfo>) => response.data)
                .catch((err: AxiosError) => {
                    throw err
                });
        }, [appContext.state.user.pid]);

    useMemo(() => {
        fetchUser().then((res: UserInfo)=> setUser(res));
        count.current = count.current+1;
    }, [fetchUser]);

    return <div>{`${user.name}     with count of render ${count.current}`}</div>
}

export default CallbackUse;