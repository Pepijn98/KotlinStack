import Twit from "twit";
import settings from "../settings";
import { FeedEmitter, FeedItem } from "rss-emitter-ts";

const twitter = new Twit({
    consumer_key: settings.consumerKey,
    consumer_secret: settings.consumerSecret,
    access_token: settings.accessToken,
    access_token_secret: settings.accessTokenSecret,
    timeout_ms: 60 * 1000,
    strictSSL: true
});

const rss = new FeedEmitter();
rss.add({ url: settings.feed.url, ignoreFirst: true, refresh: settings.feed.refresh });

rss.on("item:new", async (item: FeedItem) => {
    try {
        console.log(`Posting new question: ${item.title}`);
        await twitter.post("statuses/update", { status: `${item.title}\n${item.link}` });
        console.log("Send tweet!");
    } catch (e) {
        console.error(e);
    }
});
