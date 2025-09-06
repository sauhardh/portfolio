import * as React from "react";
import { RustLogo, JavaScriptLogo, TypeScriptLogo, PythonLogo, NextJSLogo, ReactLogo, ExpressLogo, NodeJSLogo, AIOHTTPLogo, ActixWebLogo, RedisLogo, MySQLLogo, MongoDBLogo, PostgreSQLLogo } from "./items/logos";

export function Tools() {
    return (
        <div className="flex flex-col gap-5 overflow-hidden">
            {/* <div className="flex justify-between w-full px-5 animate-marquee whitespace-nowrap  overflow-hidden">
                <span className="w-14 h-14"><RustLogo /></span>
                <span className="w-14 h-14"><JavaScriptLogo /></span>
                <span className="w-14 h-14"><TypeScriptLogo /></span>
                <span className="w-14 h-14"><PythonLogo /></span>
                <span className="w-14 h-14"><NextJSLogo /></span>
                <span className="w-14 h-14"><ExpressLogo /></span>
                <span className="w-14 h-14"><NodeJSLogo /></span>
                <span className="w-14 h-14"><ReactLogo /></span>
            </div> */}

            {/* <div className="flex justify-between w-full px-5 animate-marquee-reverse whitespace-nowrap">
                <span className="w-14 h-14"><AIOHTTPLogo /></span>
                <span className="w-14 h-14"><ActixWebLogo /></span>
                <span className="w-14 h-14"><RedisLogo /></span>
                <span className="w-14 h-14"><MySQLLogo /></span>
                <span className="w-14 h-14"><MongoDBLogo /></span>
                <span className="w-14 h-14"><PostgreSQLLogo /></span>
            </div> */}


            <div className="overflow-hidden w-full">
                <div className="flex animate-marquee whitespace-nowrap">
                    <div className="flex justify-around min-w-screen">
                        {[RustLogo, JavaScriptLogo, TypeScriptLogo, PythonLogo, NextJSLogo, ExpressLogo, NodeJSLogo, ReactLogo].map((Logo, i) => (
                            <span key={i} className="w-16 h-16 mx-4 flex items-center justify-center">
                                <Logo />
                            </span>
                        ))}
                    </div>

                    {/* Duplicate for seamless loop */}
                    <div className="flex justify-around min-w-screen">
                        {[RustLogo, JavaScriptLogo, TypeScriptLogo, PythonLogo, NextJSLogo, ExpressLogo, NodeJSLogo, ReactLogo].map((Logo, i) => (
                            <span key={i + 100} className="w-16 h-16 mx-4 flex items-center justify-center">
                                <Logo />
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="overflow-hidden w-full">
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                    <div className="flex justify-around min-w-screen">
                        {[AIOHTTPLogo, ActixWebLogo, RedisLogo, MySQLLogo, MongoDBLogo, PostgreSQLLogo].map((Logo, i) => (
                            <span key={i} className="w-16 h-16 mx-4 flex items-center justify-center">
                                <Logo />
                            </span>
                        ))}
                    </div>

                    {/* Duplicate for seamless loop */}
                    <div className="flex justify-around  min-w-screen">
                        {[AIOHTTPLogo, ActixWebLogo, RedisLogo, MySQLLogo, MongoDBLogo, PostgreSQLLogo].map((Logo, i) => (
                            <span key={i + 100} className="w-16 h-16 mx-4 flex items-center justify-center">
                                <Logo />
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}