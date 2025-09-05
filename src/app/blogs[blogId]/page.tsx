import * as React from "react";
import Heading from "@/components/items/heading";

type Props = {
    params: {
        blogId: string
    }
}

export default async function BlogPost({ params: { blogId } }: Props) {
    return (
        <div>
            {/* <div className="flex justify-center">
                <Heading heading={blog.title} class_name="font-bold text-4xl items-center" border_color="bg-txt-tertiary" />
            </div>

            <div className="w-full text-start px-60 py-30 blog-content" dangerouslySetInnerHTML={{ __html: blog.content ?? "" }} /> */}

        </div>
    )
}