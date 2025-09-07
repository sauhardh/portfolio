import * as React from "react";
import { RustLogo, JavaScriptLogo, TypeScriptLogo, PythonLogo, NextJSLogo, ReactLogo, ExpressLogo, NodeJSLogo, AIOHTTPLogo, ActixWebLogo, RedisLogo, MySQLLogo, MongoDBLogo, PostgreSQLLogo, PyTorchLogo, ScikitLearnLogo, TensorflowLogo } from "./items/logos";
import Heading from "./items/heading";
import MagneticCursor from "./MagneticCursor";

export function Tools() {
    const FIRST_ROW_LOGOS = [RustLogo, JavaScriptLogo, TypeScriptLogo, PythonLogo, NextJSLogo, ExpressLogo, NodeJSLogo, ReactLogo];
    const SECOND_ROW_LOGOS = [AIOHTTPLogo, ActixWebLogo, RedisLogo, MySQLLogo, MongoDBLogo, PostgreSQLLogo, PyTorchLogo, ScikitLearnLogo, TensorflowLogo];
    return (
        <MagneticCursor text="Few among the tools I play with">
            <div className="flex flex-col justify-center items-center gap-5 mt-5">
                <div className="min-w-screen flex justify-center items-center">
                    <Heading heading="Tools" />
                </div>
                <div className="overflow-hidden w-full mt-1">

                    <div className="flex animate-marquee whitespace-nowrap">
                        <div className="flex justify-around min-w-screen">
                            {FIRST_ROW_LOGOS.map((Logo, i) => (
                                <span key={i} className="w-16 h-16 mx-4 flex items-center justify-center filter sepia contrast-50 brightness-100 grayscale">
                                    <Logo />
                                </span>
                            ))}
                        </div>

                        {/* Duplicate for seamless loop */}
                        <div className="flex justify-around min-w-screen">
                            {FIRST_ROW_LOGOS.map((Logo, i) => (
                                <span key={i + 100} className="w-16 h-16 mx-4 flex items-center justify-center filter sepia contrast-50 brightness-100 grayscale">
                                    <Logo />
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="overflow-hidden w-full">

                    <div className="flex animate-marquee-reverse whitespace-nowrap">
                        <div className="flex justify-around min-w-screen">
                            {SECOND_ROW_LOGOS.map((Logo, i) => (
                                <span key={i} className="w-16 h-16 mx-4 flex items-center justify-center filter sepia contrast-50 brightness-100 grayscale">
                                    <Logo />
                                </span>
                            ))}
                        </div>

                        {/* Duplicate for seamless loop */}
                        <div className="flex justify-around  min-w-screen">
                            {SECOND_ROW_LOGOS.map((Logo, i) => (
                                <span key={i + 100} className="w-16 h-16 mx-4 flex items-center justify-center filter sepia contrast-50 brightness-100 grayscale">
                                    <Logo />
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </MagneticCursor>
    )
}