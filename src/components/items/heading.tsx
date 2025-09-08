import * as React from "react"
import { LucideProps } from "lucide-react"

type HeadingType = {
    heading: string
    Icon?: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >
    class_name?: string
    /**
     * Tailwind class for border color.
     * @example "bg-txt-primary"
     */
    border_color?: string
}

export default function Heading({ heading, Icon, class_name, border_color }: HeadingType) {
    return (
        <div className={`font-bold pt-8 pb-5 ${class_name} `}>
            <div className="w-full sm:w-max group relative cursor-pointer px-2">
                <div className="flex gap-2 relative z-10 text-sm sm:text-base">
                    <h1>{heading}</h1>
                    {Icon && <Icon />}
                </div>

                <span className={`absolute bottom-0 left-0 w-full h-0 p-1 ${border_color ? border_color : "bg-txt-primary"} transition-all duration-700 group-hover:h-full`}> </span>
            </div>
        </div>
    )
}