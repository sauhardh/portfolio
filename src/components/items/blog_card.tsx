// "use client"
import * as React from "react"
import BlogsParser, { BlogInfo } from "@/lib/blog"

type BlogCardProps = {
    blog: BlogInfo
}

export default async function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className="flex-col p-2">
            <h1>{blog.title}</h1>

            <div className="w-full text-start p-30 blog-content-header blog-content-quote blog-content-paragraph blog-content-anchor" dangerouslySetInnerHTML={{ __html: blog.content ?? "" }} />

        </div>
    )
}