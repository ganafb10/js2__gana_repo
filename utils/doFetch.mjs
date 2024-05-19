import { getAuthToken } from "./handleToken.mjs";

export async function doFetch(url, isAuth = false, options = {}){
    try{
        const headers = {
            'Content-Type': 'application/json',
        };
        if(isAuth){
            const authToken = getAuthToken();
            headers["Authorization"] =`Bearer ${authToken}`;
        };

        const combinedOptions ={headers, ...options};
        console.log(combinedOptions);
        const response = await fetch(url, combinedOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
        throw error
    }finally{
        //
    }
}