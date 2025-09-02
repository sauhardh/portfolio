"use client"
import * as React from "react"

type HeadingType = {
    heading: string
}

export default function Heading({ heading }: HeadingType) {
    return (
        <div className="font-bold pt-8 pb-5">
            <h1 className="border-b-8  border-primary w-max">{heading}</h1>
        </div>
    )
}