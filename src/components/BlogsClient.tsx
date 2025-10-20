"use client"
import * as React from "react"
import { useState, useMemo } from "react"
import { Library } from "lucide-react"
import Heading from "./items/heading"
import Explore from "./items/explore"
import { USER_BLOG_LINK } from "@/constants"
import BlogCard from "./items/blog_card"
import { BlogInfo } from "@/lib/blog"
import { NUM_OF_BLOG_CARDS } from "@/constants"

import { motion, AnimatePresence } from "framer-motion"

type BlogsClientProps = {
    blogs: BlogInfo[]
}

export default function BlogsClient({ blogs }: BlogsClientProps) {
    const [currPage, setCurrPage] = useState<number>(0);
    const numOfPage: number = Math.ceil(blogs.length / NUM_OF_BLOG_CARDS);

    const currentBlogs = useMemo(() => {
        const start_at = currPage * NUM_OF_BLOG_CARDS;
        return blogs.slice(start_at, start_at + NUM_OF_BLOG_CARDS);
    }, [currPage, blogs])

    return (
        <div className="flex flex-col mx-5 md:mx-0 md:mr-5 h-full">
            {/* HEADING */}
            <div className="flex justify-between items-center mx-5">
                <div className="flex justify-center items-center gap-7 md:gap-5">
                    {[...Array(numOfPage)].map((_, i) => (
                        <button
                            key={i}
                            className={`border-3 rounded-full w-full p-2 border-primary ${currPage == i ? "bg-txt-secondary" : "bg-transparent"} hover:scale-94 hover:border-txt-secondary`}
                            onClick={() => setCurrPage(i)}>
                        </button>
                    ))}
                </div>
                <div className="flex justify-center mb-4">
                    <Heading heading="Blogs" Icon={Library} />
                </div>
            </div>

            {/* BLOG CONTAINER */}
            <div className="flex flex-col justify-center flex-1 min-h-[500px]">
                <div className="grid grid-rows-1 sm:grid-cols-2 gap-1 lg:grid-cols-2 mb-4 auto-rows-auto h-full">
                    <AnimatePresence mode="sync">
                        {
                            currentBlogs.map((b, idx) => (
                                <motion.div
                                    className="w-full h-full"
                                    key={b.link}
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 500 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <BlogCard key={idx} blog={b} />
                                </motion.div>
                            ))
                        }
                    </AnimatePresence>
                </div>

                {/* FOOTER */}
                <div className="flex justify-end items-center">
                    <Explore platform="medium" link={USER_BLOG_LINK} />
                </div>
            </div>
        </div>
    )
}