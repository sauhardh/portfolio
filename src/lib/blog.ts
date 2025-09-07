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
            item: [["content:encoded"], ["summary"], ["description"]],
        }
    });

    try {
        // const CORS = "https://cors-anywhere.com/"
        const res = await fetch(url, {
            next: { revalidate: 60 * 60 * 6 },
        });
        const xml = await res.text();
        const feed = await parser.parseString(xml);

        return feed.items.map((item) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            summary: item.summary,
            content: item["content:encoded"],
            id: slugify(item.title),
        })) as BlogInfo[];
    } catch (e) {
        console.warn("Failed to parse rss field of Blog for provided url: ", url, e);
        return null;
    }
}