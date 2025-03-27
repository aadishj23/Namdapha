import { atom } from "recoil";
import { pageSelector } from "../selectors/pageSelector";

export const Page=atom<string>({
    key: "page",
    default: pageSelector
})