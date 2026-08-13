"use client"

import React from "react";
import { MdOutlineLocationOn, MdOutlineSchool } from "react-icons/md";

export default function HeaderTag({tag, iconType}) {
    const tagIcons = {
        "location": <MdOutlineLocationOn className="size-6 fill-black dark:fill-white"/>,
        "education": <MdOutlineSchool className="size-6 fill-black dark:fill-white"/>
    }

    return (
        <div className="bg-white flex content-center flex-row w-fit mt-5 pr-4 pl-3 py-2 border-2 border-stone-800 rounded-xl headerText dark:bg-transparent dark:border-stone-200">
            {tagIcons[iconType]}
            <p className="ml-2">{tag}</p>
        </div>
    )
}