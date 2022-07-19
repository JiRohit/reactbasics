import Axios, {AxiosError, AxiosResponse} from 'axios';
import UserInformation from '../models/UserInformation';


// 1st representation using class
export default class apicall {
    static callapi = async (
        userId: String
    ): Promise<UserInformation> => {
        return await Axios.get(userId.toString())
            .then((response: AxiosResponse<UserInformation>) => response.data)
            .catch((err: AxiosError) => {
                throw  err
            });
    };
}

//2nd representation using functional way
async function apicall1(): Promise<UserInformation> {
    return await Axios.get("").then((response: AxiosResponse<UserInformation>) => response.data)
        .catch((err: AxiosError) => {
            throw err
        });
}


// 3rd functional way using ES6
const apicall2 =
    async (
        userId: String
    ): Promise<UserInformation> => {
        return await Axios.get("userId")
            .then((response: AxiosResponse<UserInformation>) => response.data)
            .catch((err: AxiosError) => {
                throw err
            });
    };
