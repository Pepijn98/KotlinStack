export interface ISettings {
    consumerKey: string;
    consumerSecret: string;
    accessToken: string;
    accessTokenSecret: string;
    feed: {
        url: string;
        refresh: number;
    };
}
