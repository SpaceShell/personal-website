"use client"

import React from "react";

export default function Tag({tag, className}) {
    return (
        <div className={`bg-white content-center flex-row w-fit max-w-72 md:max-w-none pr-4 pl-3 py-2 border-2 border-stone-800 rounded-xl dark:bg-transparent dark:border-stone-200 ${className}`}>
              <p>{tag}</p>
        </div>
    )
}