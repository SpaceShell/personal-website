"use client"

import React from "react";

export default function FocusAreaCard({title, image, description}) {
    return (
        <div className="justify-center shadow-[0px_4px_6px_4px_rgba(0,0,0,0.1),0_2px_4px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_6px_4px_rgba(100,100,100,1),0_2px_4px_0px_rgba(100,100,100,1)] border-2 border-stone-300 rounded-2xl w-72 px-5 py-7 text-center transition-transform hover:scale-105 hover:bg-[#57022C] hover:text-white bg-white dark:bg-neutral-800">
            <h3 className="font-bold text-2xl">{title}</h3>
            <img src={image} className="h-20 w-20 ml-auto mr-auto my-4"></img>
            <p className="text-left mt-3 mx-2">{description}</p>
        </div>
    )
}