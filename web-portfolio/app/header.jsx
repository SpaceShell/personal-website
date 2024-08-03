"use client"

import React from "react";
import { Button } from '@headlessui/react'
import computerImage from '../public/computerImage.png'
import Sun from './rive-anims/sun-anim'
import Streaks from "./streaks-bg";
import SplitLetters from "./splitLetters-anim";

export default function Header() {
    return(
        <header className='text-center flex flex-col justify-evenly relative'>
            <Streaks />
            <div className="relative grow">
                <SplitLetters />
                <h1 className={"font-sarabun md:mt-24 mt-16 px-3 text-6xl font-black relative for-sr"}>Hello, I'm <br className="sm:hidden" aria-hidden="true"></br>Steve Luis!</h1>
                <div className="container-3d mt-8 mx-auto">
                    <p className="font-sarabun text-xl font-bold headerText w-1/2 mx-auto text-gray-900">I'm a...</p>
                    <div className="relative triangular w-2/3 mx-auto text-gray-900">
                        <p id="face1" className={"font-sarabun font-bold text-3xl headerText"} style={{
                            "--initialRotateX": "0"
                        }}><span className="text-red-700">Web</span> Developer</p>
                        <p id="face2" className={"font-sarabun font-bold text-3xl headerText absolute top-0 bottom-0 w-full"} style={{
                            "--initialRotateX": "240deg"
                        }}><span className="text-red-700">Front-End</span> Engineer</p>
                        <p id="face3" className={"font-sarabun font-bold text-3xl headerText absolute top-0 bottom-0 w-full"} style={{
                            "--initialRotateX": "120deg"
                        }}><span className="text-red-700">Determined</span> Learner</p>
                    </div>
                </div>
                {/* <hr color="black" className="h-0.5 w-1/4 mx-auto mt-2 headerText"></hr> */}
                <p className="mt-6 mx-10 text-xl relative headerText text-gray-700">Specialized in developing and deploying web applications <br className="hidden md:block"></br>for a seamless and enjoyable web experience.</p>
                <Button className="gradientTransition inline-flex items-center rounded-lg py-3 px-6 text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white mt-10 mb-40 mx-2 relative headerText">
                Get in touch!
                </Button>
                {/* <Sun/> */}
            </div>
        </header>
    )
}