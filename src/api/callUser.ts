import Axios, {AxiosError, AxiosResponse} from "axios";
import UserInfo from "../models/UserInfo";



const callUser =
    async (userId: String): Promise<UserInfo> => {
        const url: String = `https://jsonplaceholder.typicode.com/users/${userId}`;
        return await Axios.get(url.toString())
            .then((response: AxiosResponse<UserInfo>) => response.data)
            .catch((err: AxiosError) => {
                throw err
            });
    };

export default callUser;