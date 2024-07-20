"use client"

import React from "react";
import { Button } from '@headlessui/react'
import computerImage from '../public/computerImage.png'
import Sun from './rive-anims/sun-anim'
import Circles from "./circles-anim";
import SplitLetters from "./splitLetters-anim";

export default function Header() {
    return(
        <header className='text-center flex flex-col justify-evenly relative'>
            <Circles />
            <div className="relative grow">
                <SplitLetters />
                <h1 className={"font-sarabun md:mt-20 mt-4 px-3 text-6xl font-black relative for-sr"}>Hello, I'm <br className="sm:hidden" aria-hidden="true"></br>Steve Luis!</h1>
                <p className={"font-sarabun mt-7 font-bold text-2xl relative headerText"}><span className="text-teal-500">Web</span> Developer <span className="text-teal-500">+</span> Designer</p>
                <p className={"font-sarabun font-bold text-2xl relative headerText mb-0"}>Front-End Engineer</p>
                <hr color="black" className="h-0.5 w-1/4 mx-auto mt-2 headerText"></hr>
                <p className="mt-4 mx-10 text-xl relative headerText text-gray-600">Specialized in developing and deploying web applications <br className="hidden md:block"></br>for a seamless and enjoyable web experience.</p>
                <Button className="gradientTransition inline-flex items-center rounded-lg py-3 px-6 text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white mt-10 mb-8 mx-2 relative headerText">
                Get in touch!
                </Button>
                <Sun />
            </div>
        </header>
    )
}