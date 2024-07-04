import {redirect} from "next/navigation";
import {global} from "@/config/site.config";

export default async function Main() {
    redirect(global.internationalisation.defaultLanguage);

    return (
        <></>
    )
}