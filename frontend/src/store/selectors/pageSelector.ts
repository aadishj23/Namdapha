import { selector } from "recoil";

export const pageSelector = selector({
    key: "pageSelector/default",
    get: () => {
        const savedPage = sessionStorage.getItem('page');
        return savedPage ? savedPage : "Dashboard";
    },
});