import * as React from "react"
import Link from "next/link"

export function DownloadMe(): React.JSX.Element {
    return (
        <Link href={"/Sauhardha_Kafle_resume.pdf"} target="_blank" scroll={false} prefetch={true}>
            <div className="text-sm md:text-base px-3 py-1.5 md:px-4 sm:py-2 rounded-full border-2 border-slate-400 text-center w-max font-bold hover:border-slate-600 hover:scale-99 hover:border-[2.3px] active:scale-95 transition-colors duration-400 ease-in-out">
                <p>Download me!</p>
            </div>
        </Link>
    )
}