// import { logincheck } from "../features/users/authenticationSlice";
import { getToken } from "../utils/actionToken"
// import {useQuery} from 'react-query'


const useAuth = () => {
    // const {data,isSuccess} = useQuery('loggeduser',logincheck);
    if(getToken()?.accessToken !== undefined){
        // const{ accessToken } = getToken().accessToken;

        return true;
    }else{
        return false;
    }
}


export default useAuth;