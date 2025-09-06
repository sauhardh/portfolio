"use client"
import * as React from "react"
import { FolderGit2 } from "lucide-react"
import { motion } from "framer-motion"

import ProjectCard from "./items/project_card"
import { RepoInfo } from "@/lib/github"
import Heading from "./items/heading"
import Explore from "./items/explore"
import { USER_GITHUB_LINK } from "@/constants"

type ProjectClientProps = {
    projects: RepoInfo[]
}

export default function ProjectClient({ projects }: ProjectClientProps) {
    return (
        <div className="flex-col">
            <div className="flex justify-center">
                <Heading heading="Projects" Icon={FolderGit2} />
            </div>

            <div className="ml-10 snap-y">
                {
                    Object.entries(projects).map(([_, { name, url, description, language }], idx) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.4, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            < ProjectCard
                                key={name}
                                title={name}
                                url={url}
                                description={description}
                                language={language}
                            />
                        </motion.div>
                    ))
                }
            </div>

            <div className="flex justify-end mr-8">
                <Explore platform="github" link={USER_GITHUB_LINK} />
            </div>
        </div >
    )
}