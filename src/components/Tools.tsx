import * as React from "react";
import { RustLogo, JavaScriptLogo, TypeScriptLogo, PythonLogo, NextJSLogo, ReactLogo, ExpressLogo, NodeJSLogo, AIOHTTPLogo, ActixWebLogo, RedisLogo, MySQLLogo, MongoDBLogo, PostgreSQLLogo, PyTorchLogo, ScikitLearnLogo, TensorflowLogo } from "./items/logos";
import Heading from "./items/heading";
import MagneticCursor from "./MagneticCursor";

export function Tools() {
    const FIRST_ROW_LOGOS = [RustLogo, JavaScriptLogo, TypeScriptLogo, PythonLogo, NextJSLogo, ExpressLogo, NodeJSLogo, ReactLogo];
    const SECOND_ROW_LOGOS = [AIOHTTPLogo, ActixWebLogo, RedisLogo, MySQLLogo, MongoDBLogo, PostgreSQLLogo, PyTorchLogo, ScikitLearnLogo, TensorflowLogo];

    type DisplayLogosType = {
        LOGOS: (() => React.JSX.Element)[],
        top_div_class?: string,
        marquee_animation: string,
    }

    function DisplayLogos({ LOGOS, top_div_class, marquee_animation }: DisplayLogosType) {
        const SpanLogo = ({ LOGOS, offset }: { LOGOS: (() => React.JSX.Element)[], offset: number }) => {
            return (
                <div className="flex justify-around min-w-screen">
                    {LOGOS.map((Logo, i) => (
                        <span key={i + offset} className="w-12 h-7 md:w-14 md:h-14 lg:w-16 lg:h-16 max-[500px]:px-1 flex items-center justify-center filter sepia contrast-50 brightness-100 grayscale">
                            <Logo />
                        </span>
                    ))}
                </div>
            )
        };

        return (
            <div className={`overflow-hidden w-full ${top_div_class}`}>
                <div className={`flex ${marquee_animation} whitespace-nowrap`}>
                    <SpanLogo LOGOS={LOGOS} offset={0} />
                    <SpanLogo LOGOS={LOGOS} offset={100} />
                </div>
            </div>
        )
    }
    return (
        <MagneticCursor text="Few among the tools I play with">
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 mt-5">
                <div className="min-w-screen flex justify-center items-center">
                    <Heading heading="Tools" />
                </div>
                <DisplayLogos LOGOS={FIRST_ROW_LOGOS} top_div_class="mt-1" marquee_animation="animate-marquee" />
                <DisplayLogos LOGOS={SECOND_ROW_LOGOS} marquee_animation="animate-marquee-reverse" />
            </div>
        </MagneticCursor>
    )
}