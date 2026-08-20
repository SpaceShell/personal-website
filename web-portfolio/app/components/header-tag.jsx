"use client"

import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineLocationOn, MdOutlineSchool } from "react-icons/md";

export default function HeaderTag({tag, iconType}) {
    const tagIcons = {
        "location": <MdOutlineLocationOn className="size-6 fill-black dark:fill-white inline"/>,
        "education": <MdOutlineSchool className="size-6 fill-black dark:fill-white inline"/>,
        "awards": <IoMdStarOutline className="size-6 fill-black dark:fill-white inline"/>
    }

    return (
        <div className="bg-white content-center flex-row w-fit max-w-72 md:max-w-none mt-5 pr-4 pl-3 py-2 border-2 border-stone-800 rounded-xl headerText dark:bg-transparent dark:border-stone-200">
            {tagIcons[iconType]}
            <p className={iconType ? "ml-2 inline" : "inline"}>{tag}</p>
        </div>
    )
}