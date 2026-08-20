"use client"

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import ThemedButton from "./ThemedButton";

export default function ProjectSlide({
    projImage, title, subtitle, description, topSkills, addedClasses, href, codeLink
}) {
    const [linkAvailable, setLinkAvailable] = useState(true)

    useEffect(() => {
        if (codeLink == "") {
            setLinkAvailable(false)
        }
    })

    return (
        <div className={"border-0 dark:border-red-500 rounded-2xl h-full lg:mb-0 mb-8 min-w-0 basis-[32%] " + addedClasses}>
            <Link href={href}>
                <div style={{'--projImage': `url(${projImage.src})`}} className={"bg-[image:var(--projImage)] bg-[length:116%] hover:bg-[length:135%] bg-center bg-no-repeat transition-all duration-300 ease-out h-44"}></div>
            </Link>
            <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton className='group flex flex-col w-full pt-2 md:pt-6 text-left'>
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p className="text-gray-700 dark:text-gray-200">{subtitle}</p>
                    <ChevronDownIcon className="size-5 fill-gray-800 dark:fill-gray-100 group-data-[hover]:fill-gray-800/50  dark:group-data-[hover]:fill-gray-200/50 group-data-[open]:rotate-180 z-10 mt-3 mb-3 ml-auto mr-auto"/>
                </DisclosureButton>
                <DisclosurePanel transition className='text-sm/5 px-6 rounded-b-xl origin-top transition-all duration-1000 ease-out max-h-screen data-[closed]:max-h-0 overflow-hidden'>
                    <h4 className="mt-2">Purpose:</h4>
                    <p className="mb-4">{description}</p>
                    <h4>Top 3 Skills <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 inline-block mb-1">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>:</h4>
                    <ul className="list-disc mb-4">
                        <li>{topSkills[0]}</li>
                        <li>{topSkills[1]}</li>
                        <li>{topSkills[2]}</li>
                    </ul>
                    <p className="font-bold">Code link: </p>
                    <a className={linkAvailable ? "text-blue-600 underline" : "hidden"} href={codeLink}><p className="mb-6">View code</p></a>
                    <p className={linkAvailable ? "hidden" : "mb-6"}>No code link available</p>
                </DisclosurePanel >
            </Disclosure>
        </div>
    )
}