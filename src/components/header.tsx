import * as React from "react"
import { ThemeToggle } from "./theme-toggle"
import { DownloadMe } from "./download-me"

export function Header(): React.JSX.Element {
    return (
        <div className="justify-between  flex p-5">
            <DownloadMe />
            <ThemeToggle />
        </div >
    )
}