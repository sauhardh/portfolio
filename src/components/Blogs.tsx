import BlogsParser from "@/lib/blog";
import { USER_BLOG_FEED_LINK } from "@/constants";
import BlogsClient from "./BlogsClient";
import { BlogInfo } from "@/lib/blog";

function isBlogInfo(blog: BlogInfo | null): blog is BlogInfo {
    return blog != null
}

export default async function Blogs() {
    const blogs: (BlogInfo | null)[] | null = await BlogsParser(USER_BLOG_FEED_LINK);

    if (!blogs) return <div>No Blogs Found Right Now!</div>

    return <BlogsClient blogs={blogs.filter(isBlogInfo)} />
}