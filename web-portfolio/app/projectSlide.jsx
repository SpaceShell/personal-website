"use client"

import React from "react";
import { useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import "./globals.css";

export default function ProjectSlide({
    projImage, title, description, topSkills, addedClasses
}) {
    const [clicked, setClicked] = useState(false);
    
    return (
        <div className={"border-4 border-red-700 rounded-2xl w-full max-w-lg h-full lg:mb-0 mb-8 " + addedClasses}>
            <div style={{'--projImage': `url(${projImage.src})`}} className={"bg-[image:var(--projImage)] bg-[length:116%] hover:bg-[length:135%] bg-center bg-no-repeat transition-all duration-300 ease-out h-44 w-full rounded-t-xl"}></div>
            <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton className='group rounded-b-xl flex flex-col w-full items-center justify-between pt-6' onClick={() => setClicked(!clicked)}>
                    <h3 className="font-bold text-xl mb-4 text-center">{title}</h3>
                    <ChevronDownIcon className="size-5 fill-gray-800 group-data-[hover]:fill-gray-800/50 group-data-[open]:rotate-180 z-10 mb-3"/>
                </DisclosureButton>
                <DisclosurePanel transition className={`${clicked ? "panelAppear" : "panelDisappear"} -translate-y-2 text-sm/5 px-6 rounded-b-xl origin-top transition-all duration-1000 ease-out max-h-screen overflow-hidden data-[closed]:max-h-0`}>
                    <h4 className="mt-2">Info:</h4>
                    <p className="mb-4">{description}</p>
                    <h4>Top Technologies <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 inline-block mb-1">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>:</h4>
                    <ul className="list-disc mb-6">
                        <li>{topSkills[0]}</li>
                        <li>{topSkills[1]}</li>
                        <li>{topSkills[2]}</li>
                    </ul>
                </DisclosurePanel >
            </Disclosure>
        </div>
    )
}