import { doFetch } from "./doFetch.mjs";
import { REGISTER_URL } from "../shared/constants.mjs";
export async function registerUser(name, userName, email, password){
    console.log('register user');
    // Build formData object.
    const regForm = {
        name,
        userName,
        email,
        password
    };
    await doFetch(REGISTER_URL, false, {
    method: 'POST',
    body: JSON.stringify(regForm)
});

}