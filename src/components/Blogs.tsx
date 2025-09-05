import BlogsClient from "./BlogsClient";
import cacheBlogs, { cacheBlogsType, isBlogInfo } from "@/lib/cacheBlog";

export default async function Blogs() {
    const cache: cacheBlogsType | null = await cacheBlogs();
    if (!cache || cache.blogs.length <= 0) return <div>No Blogs Found Right Now!</div>

    const blogs = cache.blogs;

    return <BlogsClient blogs={blogs.filter(isBlogInfo)} />
}