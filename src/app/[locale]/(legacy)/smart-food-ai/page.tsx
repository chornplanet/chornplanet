import {headers} from "next/headers";
import {permanentRedirect} from "next/navigation";

export default async function Page() {
    const headersList = await headers();
    const lang = headersList.get("x-locale") || "en";

    permanentRedirect(`/${lang}/smart-food/`);
}
