import { USER_BLOG_FEED_LINK } from "@/constants";
import BlogsParser, { BlogInfo } from "./blog";
import { revalidate } from "@/app/blogs/[blogId]/page";

export type cacheBlogsType = {
    blogs: BlogInfo[],
    time: number,
}
let storedBlogs: cacheBlogsType | null = null;

export function isBlogInfo(blog: BlogInfo | null): blog is BlogInfo {
    return blog != null
}

export default async function cacheBlogs(): Promise<cacheBlogsType | null> {
    const now = Date.now();
    const revalidateMs = revalidate * 1000; // converting to ms
    if (storedBlogs && storedBlogs.blogs.length > 0 && (now - storedBlogs.time) < revalidateMs) return storedBlogs;

    const blogs = await BlogsParser(USER_BLOG_FEED_LINK);
    if (!blogs) return null;

    storedBlogs = { blogs: blogs.filter(isBlogInfo), time: now }
    return storedBlogs
}