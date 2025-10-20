import Parser from "rss-parser"
import he from "he";

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
    content: string,
    id: string,
}

export function slugify(title: string | undefined): string | null {
    if (!title) return null;
    return title.toLowerCase().trim().replace(/[^a-z0-9_-]/g, "-").replace(/^-+|-+$/g, "");
}

export default async function BlogsParser(url: string): Promise<BlogInfo[] | null> {
    const parser: Parser<CustomFeed, CustomItem> = new Parser({
        customFields: {
            item: [["content:encoded", "content"], ["summary"], ["description"]],
        }
    });

    try {
        // const CORS = "https://cors-anywhere.com/"
        const res = await fetch(url, {
            next: { revalidate: 21600 },
        });
        const xml = await res.text();
        const feed = await parser.parseString(xml);

        return feed.items.map((item) => ({
            title: he.decode(item.title || ""),
            link: he.decode(item.link || ""),
            pubDate: he.decode(item.pubDate || ""),
            summary: he.decode(item.summary || ""),
            content: he.decode(item["content:encoded"] || ""),
            id: slugify(item.title) || Math.random().toString(36).slice(2, 10),
        })) as BlogInfo[];
    } catch (e) {
        console.warn("Failed to parse rss field of Blog for provided url: ", url, e);
        return null;
    }
}