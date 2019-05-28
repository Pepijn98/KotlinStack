import { ISettings } from "./src/interfaces/Settings";

const settings: ISettings = {
    consumerKey: "",
    consumerSecret: "",
    accessToken: "",
    accessTokenSecret: "",
    feed: {
        url: "https://stackoverflow.com/feeds/tag/kotlin",
        refresh: 20000
    }
}

export default settings;
