"use client"
import * as React from "react"
import { LANGUAGE_COLORS } from "@/languages"

interface ProjectCardProps {
    title: string,
    description: string,
    language: string,
    url: string
}

export default function ProjectCard({ title, description, language, url }: ProjectCardProps): React.JSX.Element {
    return (
        <div className="flex-col p-5 snap-end">
            <div className="text-left cursor-pointer">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <h1 className="font-alfa underline m-0 hover:scale-99 hover:text-blue-300">{title}</h1>
                </a>
                <p>{description}</p>
            </div>

            <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full border-2`} style={{ backgroundColor: LANGUAGE_COLORS[language] }}>
                </span>
                <p>{language}</p>
            </div>
        </div>
    )
}