import * as React from "react"
import { Library } from "lucide-react"

import Heading from "./items/heading"
import Explore from "./items/explore"
import { USER_BLOG_LINK } from "@/constants"
import BlogCard from "./items/blog_card"
import BlogsParser from "@/lib/blog"
import { BlogInfo } from "@/lib/blog"

type BlogsClientProps = {
    blogs: BlogInfo[]
}

export default function BlogsClient({ blogs }: BlogsClientProps) {

    return (
        <div className="flex-col mt-30">
            <div className="flex justify-center">
                <Heading heading="Blogs" Icon={Library} />
            </div>

            {
                blogs.map((b, idx) => (
                    <BlogCard key={idx} blog={b} />
                ))
            }

            <div className="flex justify-end">
                <Explore platform="medium" link={USER_BLOG_LINK} />
            </div>

        </div>
    )
}