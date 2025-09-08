"use client"
import { useState, useEffect } from "react";
import * as React from "react";

type MangeticCursorType = {
    text: string,
    children?: React.ReactNode
    class_name?: string
}

export default function MagneticCursor({ text, children, class_name }: MangeticCursorType) {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const hideOnScroll = () => {
            setShow(false)
        }

        window.addEventListener("scroll", hideOnScroll);
        return () => {
            window.removeEventListener("scroll", hideOnScroll);
        }
    }, [])
    return (
        <div
            className={`cursor-none overflow-none relative overflow-clip ${class_name}`}
            onMouseEnter={() => {
                setShow(true);
            }}
            onMouseLeave={() => {
                setShow(false);
            }}
            onMouseMove={(m) => {
                setPos({ x: m.clientX, y: m.clientY })
                setShow(true);
            }}
            onScroll={() => {
                setShow(false);
            }}
        >
            {children}
            {
                show ?
                    <div className="border-3 border-border rounded-md bg-txt-primary px-2" style={{ position: "fixed", top: pos.y, left: pos.x, transform: "translate(-50%, -70%)", pointerEvents: "none" }}>
                        {text || "⬤"}
                    </div>
                    : ""
            }
        </div>
    )
}