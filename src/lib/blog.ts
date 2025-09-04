import Parser from "rss-parser"

type CustomFeed = unknown;
type CustomItem = {
    "content:encoded"?: string,
    summary?: string,
    description: string
};

export type BlogInfo = {
    title: string,
    link: string,
    pubDate: string,
    summary?: string,
    content: string
}

export default async function BlogsParser(url: string): Promise<BlogInfo[] | null> {
    const parser: Parser<CustomFeed, CustomItem> = new Parser({
        customFields: {
            item: [["content:encoded"], ["summary"], ["description"]],
        }
    });

    try {
        const feed = await parser.parseURL(url);

        return feed.items.map((item) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            summary: item.summary,
            content: item["content:encoded"],
        })) as BlogInfo[];
    } catch (e) {
        console.warn("Failed to parse rss field of Blog for provided url: ", url, "Error: ", e);
        return null;
    }
}