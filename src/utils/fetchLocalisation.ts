import axios from "axios";
import {global} from "@/config/site.config";

const fetchLocalisation = async (lang: string, file: string): Promise<{ data: { [key: string]: any } }> => {
    let res = {data: {}};
    await axios.get(`${global.internationalisation.localisationPath}/${lang}/${file}.json`)
        .then(response => {
            res = response;
        })

    return res;
};

export default fetchLocalisation;