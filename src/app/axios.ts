import axios from "axios";
import { MAIN_HOST } from "./host";

export const getText = async function () {
    const { data } = await axios.get(`${MAIN_HOST}/api/pageText`);
    return data;
};