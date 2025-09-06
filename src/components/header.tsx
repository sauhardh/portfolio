import * as React from "react"
import { ThemeToggle } from "./items/theme-toggle"
import { DownloadMe } from "./items/download-me"

export function Header(): React.JSX.Element {
    return (
        <div className="justify-between flex m-5">
            <DownloadMe />
            <ThemeToggle />
        </div >
    )
}