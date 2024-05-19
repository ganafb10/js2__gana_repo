
import { registerUser } from "../utils/registerUser.mjs";
import { doFetch } from "../utils/doFetch.mjs";
import { REGISTER_URL } from "../shared/constants.mjs";

const registerForm = document.querySelector("#register-form");
registerForm.addEventListener('submit', (event)=>{
    event.preventDefault();// prevent the form from submision
    const name = event.target[0].value;
    const userName = event.target[1].value;
    const email = event.target[2].value;
    const password = event.target[3].value;
    registerUser(name, userName, email, password);
});



