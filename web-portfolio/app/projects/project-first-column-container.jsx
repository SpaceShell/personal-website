"use client"

import React from "react";

export default function ProjectFirstColumnContainer({children}) {
    return (
        <div className="order-last lg:order-first basis-2/5 content-center flex flex-col justify-center items-center">
            {children}
        </div>
    )
}