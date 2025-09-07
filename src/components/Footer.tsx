import * as React from "react"
import SayMyName from "./items/my_name"
import { GithubLogo, GmailLogo, LinkedInLogo, JavaScriptLogo, NodeJSLogo } from "./items/logos"
import { USER_GITHUB_LINK, USER_LINKEDIN_LINK, USER_MAIL } from "@/constants"

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className="w-full cursor-pointer mt-25 mb-15">
            <div className="border-b-2 border-border">

                <div className="mx-10 flex justify-between items-center">
                    <span className="text-muted-foreground">
                        All rights reserved &copy; Sauhardha Kafle | {year}
                    </span>
                    <span className="flex gap-4 w-30 py-2">
                        <a href={USER_GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="w-30">
                            <GithubLogo />
                        </a>
                        <a href={`mailto:${USER_MAIL}`} target="_blank" rel="noopener noreferrer" className="w-30">
                            <GmailLogo />
                        </a>
                        <a href={USER_LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="w-30">
                            <LinkedInLogo />
                        </a>
                    </span>
                </div>

            </div>
            <SayMyName />
        </div>
    )
}