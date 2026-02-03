export const SERVER_API = "http://localhost:3000/api"; // Change as per your backend server api

export const SUB_API = {
    AUTH: {
        SIGN_UP: "/user/signup",     // Call it like ${SERVER_API}${SUB_API.AUTH.SIGN_UP} (FOR USER SIGNUP)
        SIGN_IN: "/user/signin",
        GET_CURRENT_USER: "/user/me",
    }
}