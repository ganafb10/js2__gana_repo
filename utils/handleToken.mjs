//add token and retrieve token

export const addAuthToken = (token)=>{
    //Get auth token from local Storage
    console.log('add token', token)
    localStorage.setItem('access-token', token);
};


export const getAuthToken = ()=>{
    //return authtoken
    const accessToken= localStorage.getItem('access-token');
    return accessToken;
};
