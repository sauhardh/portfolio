import * as React from "react"

export default function SayMyName() {
    const baseClasses = "block w-full text-xl min-[275px]:text-2xl min-[350px]:text-3xl min-[430px]:text-4xl min-[560px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl transform origin-center";

    return (
        <div className="relative text-primary flex max-w-screen flex-col justify-center font-alfa text-center overflow-hidden border-white mt-3 p-0 h-max">
            <span className={`${baseClasses} scale-x-[1.45]`}>SAUHARDHA</span>
            <span className={`${baseClasses} scale-x-[2.8]`}>KAFLE</span>
            <span className="absolute bg-txt-primary w-full min-h-2/4 -z-100 bottom-0"> </span>
        </div>
    )
}