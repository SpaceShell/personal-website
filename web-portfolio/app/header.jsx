"use client"

import React from "react";
import { Button } from '@headlessui/react';
import SplitLetters from "./splitLetters-anim";
import SideConnect from "./sideConnect.jsx";
import Computer from "./rive-anims/comp-anim.jsx";
import topLight from "../public/TopBlendedLight.svg";
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { MdOutlineLocationOn } from "react-icons/md";
import { Sarabun } from 'next/font/google';

const sarabunSemi = Sarabun({ 
    subsets: ['latin'], 
    weight: ['700']
})

export default function Header() {
    return(
        <header className='flex md:flex-row flex-col justify-evenly relative'>
            <SideConnect />
            <img src={topLight.src} className="absolute h-72 w-72 -top-20 right-0 z-10"/>
            <div className="relative grow mx-6 md:mx-none lg:ml-40 md:ml-24">
                <div className="flex flex-row md:mt-[4.5rem] mt-16 headerText">
                    <MdOutlineLocationOn className="size-6 fill-black"/>
                    <p className="ml-1 mt-0.5">United States, California</p>
                </div>
                <SplitLetters />
                <h1 className="font-soraExBold tracking-tight text-6xl relative for-sr">Hello, I'm <br className="sm:hidden" aria-hidden="true"></br>Steve Luis!</h1>
                <p className={sarabunSemi.className + " text-3xl headerText md:mt-7 mt-9 text-gray-900"}>I am a...</p>
                    <div className="relative triangular w-full text-gray-900 mt-0.5">
                        <p id="face1" className={sarabunSemi.className + " text-3xl headerText"} style={{
                            "--initialRotateX": "0"
                        }}><span className="text-red-700">Web</span> Developer</p>
                        <p id="face2" className={sarabunSemi.className + " text-3xl headerText absolute top-0 bottom-0 w-full"} style={{
                            "--initialRotateX": "240deg"
                        }}><span className="text-red-700">Front-End</span> Engineer</p>
                        <p id="face3" className={sarabunSemi.className + " text-3xl headerText absolute top-0 bottom-0 w-full"} style={{
                            "--initialRotateX": "120deg"
                        }}><span className="text-red-700">Determined</span> Learner</p>
                    </div>
                <p className="mt-6 text-xl relative headerText text-gray-700">Specialized in developing and deploying web applications <br className="hidden md:block"></br>for a seamless and enjoyable web experience.</p>
                <a href="#footer">
                    <Button className="gradientTransition inline-flex items-center rounded-lg py-3 px-8 font-semibold text-md text-white relative before:content-[''] before:absolute before:w-full before:h-full before:outline before:bottom-0 before:left-0 before:rounded-lg before:outline-2 before:outline-transparent before:transition-all before:duration-150 before:ease-in before:hover:outline-offset-2 before:hover:outline-amber-500 before:active:outline-4 before:active:outline-amber-600 mt-10 headerText">
                        Get in touch!
                        <ChevronRightIcon className="size-5 fill-white"/>
                    </Button>
                </a>
            </div>
            <Computer />
        </header>
    )
}