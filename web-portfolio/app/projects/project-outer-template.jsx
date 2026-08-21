"use client"

import React from "react";
import Navbar from "../navbar";

export default function ProjectOuterTemplate({children}) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col lg:flex-row gap-20 mx-16 md:mx-32 lg:mx-40 my-10">
                {children}
            </main>
        </>
    )
}