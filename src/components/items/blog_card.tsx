"use client"
import * as React from "react"
import { useEffect, useState } from "react"
import { BlogInfo } from "@/lib/blog"
import Image from "next/image"
import Link from "next/link"

const blogImagePlaceholder = "/blogImagePlaceholder.png";

type BlogCardProps = {
    blog: BlogInfo
}

function getFirstImage(html: string | undefined): string | null {
    if (!html) return null;

    const doc = new DOMParser().parseFromString(html, "text/html");
    const img = doc.querySelector("img");
    return img ? img.getAttribute("src") : null;
}

export default function BlogCard({ blog }: BlogCardProps) {
    const [img, setImage] = useState<string | null>(null);
    const [date, setDate] = useState<string>("");
    useEffect(() => {
        let img = getFirstImage(blog.content);
        const date = new Date(blog.pubDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        if (!img || img?.includes("/_/stat")) {
            img = blogImagePlaceholder
        }
        setImage(img);
        setDate(date);
    }, [blog.content, blog.pubDate]);

    return (
        <div className="group border-1 border-border rounded-xs bg-card shadow-md p-4 w-full h-full max-h-80 content-center [grid-row:span_30] hover:scale-99 ">
            <Link href={`/blogs/${blog.id}`} prefetch={true}>
                <div className="flex flex-col overflow-scroll scrollbar-hidden">
                    {
                        img &&
                        <Image src={img} alt={blog.title} className="w-max max-h-36 rounded-lg mb-3 self-center" width={150} height={200} />
                    }
                    <div className="flex flex-col h-max">
                        <h2 className="text-sm sm:text-lg font-bold text-wrap max-w-xs self-center">{blog.title}</h2>
                        <div className="flex gap-2 text-xs text-muted-foreground mt-4 justify-around">
                            <div className="flex gap-2">
                                <p className="underline text-xs sm:text-base">Published on</p>
                                <span>{date}</span>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-all delay-500 text-txt-tertiary underline font-bold">
                                Read More
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    )
}