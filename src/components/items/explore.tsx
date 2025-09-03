"use client"

import * as React from "react"
import { Maximize2 } from "lucide-react"

type ExploreParams = {
    platform?: string
    link?: string
}

export default function Explore({ platform, link }: ExploreParams) {
    return (
        <div className={`font-bold pt-8 pb-5 ${link ? "hover:scale-99" : ""}`}
            onClick={() => {
                if (link) window.open(link, "_blank")
            }}
        >
            <div className="w-max group relative cursor-pointer">
                <h1 className="relative z-10 px-2">

                    <div className="flex gap-2">
                        Explore More {platform ? `on ${platform}` : ""}
                        <Maximize2 className="p-0.5" />
                    </div>

                </h1>
                <span className="absolute bottom-0 left-0 w-full h-0 p-1 bg-txt-secondary transition-all duration-700 group-hover:h-full"> </span>
            </div>
        </div>
    )
}