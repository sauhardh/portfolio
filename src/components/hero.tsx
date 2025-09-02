"use client"
import * as React from "react"
import Image from "next/image"
import { HERO_TEXT } from "@/constants"

export default function Hero(): React.JSX.Element {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="border-4 border-b-10 w-[200px] h-[200px] rounded-full overflow-hidden">
                <Image
                    src="/profile.jpg"
                    alt="profile"
                    priority width={200}
                    height={200}
                    className="object-cover"
                />
            </div>

            <div className="mt-20">
                {HERO_TEXT.map((each, i) => (
                    <span key={i}>
                        {each}{each.length >= 12 ? <br /> :

                            HERO_TEXT.length != i + 1 ?
                                <span className="font-black">&nbsp;&nbsp;.&nbsp;</span>
                                : " "
                        }
                    </span>
                ))}
            </div>
        </div >
    )
}
