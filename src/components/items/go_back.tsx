"use client"
import * as React from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

type GoBackParams = {
    link?: string,
    explicit_content?: string
}

export default function GoBack({ link, explicit_content }: GoBackParams) {
    return (
        <Link href={"/"} className={`font-bold pt-8 pb-5 ${link ? "hover:scale-99" : ""}`} prefetch={true}>
            <div className="w-max group relative cursor-pointer">
                <h1 className="relative z-10 px-2">
                    <div className="flex gap-2">
                        {explicit_content ? explicit_content : "Go Back"}
                        <ArrowLeft className="p-0.5" />
                    </div>
                </h1>
                <span className="absolute bottom-0 left-0 w-full h-0 p-1 bg-txt-tertiary transition-all duration-700 group-hover:h-full"> </span>
            </div>
        </Link>
    )
}