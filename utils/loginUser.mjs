import { doFetch } from "./doFetch.mjs";
import { LOGIN_URL } from "../shared/constants.mjs";
import { addAuthToken } from "./handleToken.mjs";

export async function loginUser( email, password){
    console.log('login user');
    // Build formData object.
    const regForm = {
        email,
        password,
    };
  const response =  await doFetch(LOGIN_URL, false, {
    method: 'POST',
    body: JSON.stringify(regForm)
});
const accessToken = response.accessToken;
if(accessToken){
    addAuthToken(accessToken);
    setTimeout(() => {
        window.location.href='/posts/';
    },1000);
    
}else{
    throw new Error('no access token provided')
}
}
