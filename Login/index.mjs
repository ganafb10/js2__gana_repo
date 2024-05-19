import { loginUser } from "../utils/loginUser.mjs";
import { doFetch } from "../utils/doFetch.mjs";
import { LOGIN_URL } from "../shared/constants.mjs";

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();// prevent the form from submision
    console.log(event)
    const email = event.target[0].value;
    const password = event.target[1].value;
    loginUser(email, password);
});


