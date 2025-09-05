"use client"
import * as React from "react"
import { useEffect, useState } from "react"
import { BlogInfo } from "@/lib/blog"
import Image from "next/image"
import Link from "next/link"

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
        const img = getFirstImage(blog.content);
        const date = new Date(blog.pubDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        setImage(img);
        setDate(date);
    }, []);

    return (
        <div className="group border-1 border-border rounded-xs bg-card shadow-md p-4 w-full h-full content-center [grid-row:span_30] hover:scale-99">
            <Link href={`/blogs/${blog.id}`}>
                <div className="flex flex-col">
                    {
                        img &&
                        <Image src={img} alt={blog.title} className="w-max rounded-lg mb-3 self-center" width={150} height={200} />
                    }
                    <div className="flex flex-col h-max">
                        <h2 className="text-lg font-bold text-wrap max-w-xs self-center">{blog.title}</h2>
                        <div className="flex gap-2 text-xs text-muted-foreground mt-4 justify-around">
                            <div className="flex gap-2">
                                <p className="underline">Published on</p>
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