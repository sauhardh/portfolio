import * as React from "react"

import { PROJECTS } from "@/constants"
import ProjectCard from "./project_card"
import GitGetThisRepo, { RepoInfo } from "@/lib/github"
import Heading from "./heading"

export default async function Project() {
    let projects: Record<string, RepoInfo> = {};

    for (const [repo_name, user_name] of Object.entries(PROJECTS)) {
        const res = await GitGetThisRepo(user_name, repo_name);

        if (!res) {
            console.warn(`Got 'null' when requesting repo<${repo_name}> info from github user<${user_name}>`)
            continue;
        }
        projects[repo_name] = res
    }

    return (
        <div className="flex-col mt-20">
            <div className="flex justify-center">
                <Heading heading="Projects" />
            </div>

            <div className="ml-50">
                {
                    Object.entries(projects).map(([_, { name, url, description, language }]) => (
                        < ProjectCard
                            key={name}
                            title={name}
                            url={url}
                            description={description}
                            language={language}
                        />
                    ))
                }
            </div>
        </div>
    )
}