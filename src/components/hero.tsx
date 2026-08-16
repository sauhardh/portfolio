"use client";
import * as React from "react";
import Image from "next/image";
import { HERO_TEXT } from "@/constants";
import { LANGUAGE_COLORS } from "@/languages";

export default function Hero(): React.JSX.Element {
  return (
    <div className="w-full mb-30 px-10 sm:px-28 md:px-52">
      <div className="grid grid-cols-[1fr_3fr_1fr] sm:grid-cols-[1fr_2fr_1fr]">
        {/* Row 1: Top spacing */}
        <div className="border-r-2 border-border py-6 sm:py-10" />
        <div className="border-r-2 border-border py-6 sm:py-10" />
        <div className="py-6 sm:py-10" />

        {/* Row 2: Avatar */}
        <div className="border-t-2 border-r-2 border-border" />
        <div className="border-t-2 border-r-2 border-border py-8 flex justify-center items-center">
          <div className="border-4 border-b-10 border-border w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden">
            <Image
              src="/profile2.png"
              alt="profile"
              priority
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="border-t-2 border-border" />

        {/* Row 3: Middle gap */}
        <div className="border-r-2 border-border py-4 sm:py-6 flex items-center">
          <div className="w-full border-t-2 border-border" />
        </div>
        <div className="border-r-2 border-border py-4 sm:py-6 flex items-center">
          <div className="w-full border-t-2 border-border" />
        </div>
        <div className="py-4 sm:py-6 flex items-center">
          <div className="w-full border-t-2 border-border" />
        </div>

        {/* Row 4: Text */}
        <div className="border-r-2 border-border" />
        <div className="border-r-2 border-border py-8 px-4 flex justify-center items-center text-center">
          <div className="cursor-pointer italic text-xs sm:text-lg md:text-2xl font-regular">
            {HERO_TEXT.map((each, i) => (
              <span key={i}>
                {each.split("").map((letter, i) => (
                  <span
                    key={i}
                    className="hover:font-alfa hover:font-bold hover:scale-400 hover:italic"
                    style={{ color: "inherit" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color =
                        Object.values(LANGUAGE_COLORS)[i];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "inherit";
                    }}
                  >
                    {letter}
                  </span>
                ))}
                {each.length >= 12 ? (
                  <br />
                ) : HERO_TEXT.length != i + 1 ? (
                  <span className="font-black">&nbsp;&nbsp;.&nbsp;</span>
                ) : (
                  " "
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="border-border" />

        {/* Row 5: Bottom spacing */}
        <div className="border-t-2 border-r-2 border-border py-6 sm:py-10" />
        <div className="border-t-2 border-r-2 border-border py-6 sm:py-10" />
        <div className="border-t-2 border-border py-6 sm:py-10" />
      </div>
    </div>
  );
}
