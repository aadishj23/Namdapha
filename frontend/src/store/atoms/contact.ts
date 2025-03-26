import { atom } from "recoil";
import { Contact } from "@/types/contact";

export const contact=atom<Contact>({
    key: "signin",
    default: {
        Name: "",
        Email: "",
        Message: ""
    }
})