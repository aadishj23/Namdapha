import { selector } from "recoil";

export const loginSelector = selector({
    key: "loggedin/default",
    get: () => {
        const savedLoggedIn = sessionStorage.getItem('token');
        return savedLoggedIn ? true : false;
    },
});