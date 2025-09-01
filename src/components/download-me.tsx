import * as React from "react"
import Link from "next/link"

export function DownloadMe() {
    return (
        // By default prefetch is "true" 
        // By default scroll is "true" 
        <Link href={"https://www.sauhardhakafle.com.np"}>
            <div className="px-4 py-2 rounded-full border-2 border-white text-center w-max font-bold">
                <p>Download me!</p>
            </div>
        </Link>
    )
}