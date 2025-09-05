import * as React from "react";
import Heading from "@/components/items/heading";
import BlogsParser from "@/lib/blog";
import { USER_BLOG_FEED_LINK } from "@/constants";
import notFound from "./notFound";
import { slugify } from "@/lib/blog";
import Explore from "@/components/items/explore";
import cacheBlogs, { cacheBlogsType } from "@/lib/cacheBlog";

export async function generateStaticParams() {
    const blogs = await BlogsParser(USER_BLOG_FEED_LINK);
    return blogs?.map((b) => ({ blogId: slugify(b.id) })) || [];
}

export const revalidate = 60 * 60 * 6; // revalidate at every 6hr.

type Props = {
    params: Promise<{
        blogId: string
    }>
}

export default async function BlogPost(props: Props) {
    const { blogId } = await props.params;

    // const blogs = await BlogsParser(USER_BLOG_FEED_LINK);
    const cache: cacheBlogsType | null = await cacheBlogs();
    const blog = cache && cache.blogs.find(blog => slugify(blog.id) === blogId);

    if (!blog) return notFound();
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center pt-15 pb-5">
                <Heading heading={blog.title} class_name="font-bold text-4xl items-center" border_color="bg-txt-tertiary" />
            </div>

            <div className="w-full text-start px-60 pb-30 blog-content" dangerouslySetInnerHTML={{ __html: blog.content ?? "" }} />
            <Explore platform="medium" link={blog.link} explicit_content="Read this" />
        </div>
    )
}