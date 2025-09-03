import * as React from "react"
import Link from "next/link"
import { RESUME_LINK } from "@/constants"

export function DownloadMe(): React.JSX.Element {
    return (
        // By default prefetch is "true" 
        // By default scroll is "true" 
        <Link href={RESUME_LINK} target="_blank">
            <div className="px-4 py-2 rounded-full border-2 border-slate-400 text-center w-max font-bold hover:border-slate-600 hover:scale-99 hover:border-[2.3px] active:scale-95 transition-colors duration-400 ease-in-out">
                <p>Download me!</p>
            </div>
        </Link>
    )
}