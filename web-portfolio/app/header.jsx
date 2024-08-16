"use client"

import React from "react";
import { Button } from '@headlessui/react';
import Streaks from "./streaks-bg";
import SplitLetters from "./splitLetters-anim";
import SideConnect from "./sideConnect"
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { MdOutlineLocationOn } from "react-icons/md";
import { Sarabun } from 'next/font/google';

const sarabunSemi = Sarabun({ 
    subsets: ['latin'], 
    weight: ['700']
})

export default function Header() {
    return(
        <header className='flex flex-col justify-evenly relative'>
            <SideConnect />
            <div className="relative grow">
                <div className="flex flex-row md:mt-20 mt-16 ml-44 headerText">
                    <MdOutlineLocationOn className="size-6 fill-black"/>
                    <p className="ml-1 mt-0.5">United States, California</p>
                </div>
                <SplitLetters />
                <h1 className="font-ExBoldsarabun pl-44 text-6xl relative for-sr">Hello, I'm <br className="sm:hidden" aria-hidden="true"></br>Steve Luis!</h1>
                <p className={sarabunSemi.className + " text-3xl headerText ml-44 mt-6 text-gray-900"}>I am a...</p>
                    <div className="relative triangular w-2/3 text-gray-900 mt-0.5 ml-44">
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
                {/* <hr color="black" className="h-0.5 w-1/4 mx-auto mt-2 headerText"></hr> */}
                <p className="mt-6 ml-44 text-xl relative headerText text-gray-700">Specialized in developing and deploying web applications <br className="hidden md:block"></br>for a seamless and enjoyable web experience.</p>
                <Button className="gradientTransition inline-flex items-center rounded-lg py-3 px-8 font-semibold text-sm text-white shadow-inner shadow-white/10 relative before:content-[''] before:absolute before:w-full before:h-full before:outline before:bottom-0 before:left-0 before:rounded-lg before:outline-2 before:outline-transparent before:transition-all before:duration-150 before:ease-in before:hover:outline-offset-2 before:hover:outline-amber-500 before:active:outline-4 before:active:outline-amber-600 mt-10 mb-40 ml-44 headerText">
                    Get in touch!
                    <ChevronRightIcon className="size-5 fill-white"/>
                </Button>
            </div>
        </header>
    )
}