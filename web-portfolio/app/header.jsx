"use client"

import React from "react";
import { Button } from '@headlessui/react';
import SplitLetters from "./splitLetters-anim";
import SideConnect from "./sideConnect.jsx";
import topLight from "../public/TopBlendedLight.svg";
import topLightDark from "../public/TopBlendedLight-Dark.svg";
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Sarabun } from 'next/font/google';
import HeaderTag from "./components/header-tag";
import Image from "next/image";

const sarabunSemi = Sarabun({ 
    subsets: ['latin'], 
    weight: ['700']
})

export default function Header() {
    return(
        <header className='flex flex-col lg:px-10 justify-evenly relative'>
            <SideConnect />
            <Image src={topLight.src} alt="Streak of red color" width={260} height={100} className="absolute h-72 w-72 -top-20 right-0 z-10 block dark:hidden"/>
            <Image src={topLightDark.src} alt="Streak of red color" width={260} height={100} className="absolute h-72 w-72 -top-20 right-0 z-10 hidden dark:block"/>
            <div className="flex flex-col justify-center relative mx-6 mt-24 md:mt-28 md:mx-none text-center">
                <Image src={"/leftConnectedClouds.png"} width={260} height={100} preload={"true"} alt="On the left side, two clouds with code symbols connected by a dashed line" className="hidden md:block absolute -bottom-10 left-32"/>
                <Image src={"/rightConnectedClouds.svg"} width={260} height={100} preload={"true"} alt="On the right side, two clouds with code symbols connected by a dashed line" className="hidden md:block absolute -top-28 right-32"/>
                <SplitLetters />
                <h1 className="font-soraExBold tracking-tight text-6xl relative for-sr">Hello, I'm <br className="sm:hidden" aria-hidden="true"></br>Steve Luis!</h1>
                <p className={sarabunSemi.className + " text-3xl headerText mt-4 md:mt-7 text-gray-900 dark:text-gray-100"}>I am a...</p>
                    <div className="relative triangular w-full text-gray-900 dark:text-gray-100 mt-0.5">
                        <p id="face1" className={sarabunSemi.className + " text-3xl headerText"} style={{
                            "--initialRotateX": "0"
                        }}><span className="redText">Web</span> Developer</p>
                        <p id="face2" className={sarabunSemi.className + " text-3xl headerText absolute top-0 bottom-0 w-full"} style={{
                            "--initialRotateX": "240deg"
                        }}><span className="redText">UI/UX</span> Designer</p>
                        <p id="face3" className={sarabunSemi.className + " text-3xl headerText absolute top-0 bottom-0 w-full"} style={{
                            "--initialRotateX": "120deg"
                        }}><span className="redText">Wordpress</span> Developer</p>
                    </div>
                <p className="mt-6 text-xl relative headerText text-gray-700 dark:text-gray-100">Specialized in developing and deploying web applications <br className="hidden md:block"></br>for a seamless and enjoyable web experience.</p>
                <div className="flex justify-center items-center flex-col md:flex-row md:gap-5">
                    <HeaderTag tag={"Computer Science @ UC Irvine"} iconType={"education"}/>
                    <HeaderTag tag={"United States, California"} iconType={"location"}/>
                </div>
                <div className="flex justify-center items-center flex-col mb-24 md:flex-row md:gap-5">
                    <HeaderTag tag={"HSF Scholar & Pinterest Engage Scholar"} iconType={"awards"}/>
                </div>
                <a href="#footer">
                    <Button className="gradientTransition inline-flex items-center rounded-lg py-3 px-8 font-semibold text-md text-white relative before:content-[''] before:absolute before:w-full before:h-full before:outline before:bottom-0 before:left-0 before:rounded-lg before:outline-2 before:outline-transparent before:transition-all before:duration-150 before:ease-in before:hover:outline-offset-2 before:hover:outline-amber-500 before:active:outline-4 before:active:outline-amber-600 headerText">
                        Get in touch!
                        <ChevronRightIcon className="size-5 fill-white"/>
                    </Button>
                </a>
            </div>
        </header>
    )
}