"use client"

import React from "react";
import { useState } from "react"
import TailwindLogo from "../public/tailwindcss-mark.svg";
import NextWordmark from "../public/nextjs-logotype-light-background.svg";
import NextWordmarkDark from "../public/nextjs-logotype-dark-background.svg";
import gitIcon from "../public/git-icon.svg";
import jQueryImage from "../public/jQuery-Logo.svg";
import jQueryImageDark from "../public/jQuery-Logo_On_Dark.svg";
import Image from 'next/image';
import { Button } from '@headlessui/react';

const skillsTR = [
    {
        link: "http://www.w3.org/html/logo", 
        src: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png", 
        alt: "HTML5 logo", 
        title: "HTML5", 
        className: "skillImage",
        outsideClassname: ""
    },
    {
        link: "https://commons.wikimedia.org/wiki/File:CSS3_logo.svg", 
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817", 
        alt: "CSS logo", 
        title: "CSS - Image credit: daPhyre (File:CSS3 and HTML5 logos and wordmarks.svg) Elfi (File:CSS3 logo and wordmark.svg) ExE Boss, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons", 
        className: "skillImage",
        outsideClassname: ""
    },
    {
        link: "https://tailwindcss.com/", 
        src: TailwindLogo.src, 
        alt: "Tailwind CSS Logo", 
        title: "Tailwind CSS", 
        className: "skillImage",
        outsideClassname: ""
    },
    {
        link: "https://getbootstrap.com/", 
        src: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg", 
        alt: "Bootstrap logo", 
        title: "Bootstrap", 
        className: "skillImage",
        outsideClassname: ""
    },
    {
        link: "https://commons.wikimedia.org/wiki/File:JavaScript-logo.png", 
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png?20120221235433", 
        alt: "Javascript logo", 
        title: "Javascript - Image credit: Christopher Williams, Public domain, via Wikimedia Commons", 
        className: "skillImage",
        outsideClassname: ""
    },
    {
        link: "https://jquery.com/", 
        src: jQueryImage.src, 
        alt: "JQuery logo", 
        title: "jQuery", 
        className: "skillImage min-w-1 min-h-1",
        outsideClassname: " flex dark:hidden"
    },
    {
        link: "https://jquery.com/", 
        src: jQueryImageDark.src,
        alt: "JQuery logo dark", 
        title: "jQuery", 
        className: "skillImage min-w-1 min-h-1",
        outsideClassname: " hidden dark:flex"
    }
];

const skillsBR = [
    {
        link: "https://react.dev/", 
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png", 
        alt: "React logo", 
        title: "React JS", 
        className: "skillImage",
        outsideClassname: ""
    },
    {
        link: "https://nextjs.org/", 
        src: NextWordmark.src, 
        alt: "Next.js logo", 
        title: "Next.js", 
        className: "skillImage",
        outsideClassname: " flex dark:hidden"
    },
    {
        link: "https://nextjs.org/", 
        src: NextWordmarkDark.src, 
        alt: "Next.js logo dark", 
        title: "Next.js", 
        className: "skillImage",
        outsideClassname: " hidden dark:flex"
    },
    {
        link: "https://www.python.org/", 
        src: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png", 
        alt: "Python logo", 
        title: "Python", 
        className: "skillImage",
        outsideClassname: ""
    },
    {
        link: "https://git-scm.com/", 
        src: gitIcon.src,
        alt: "Git logo", 
        title: "Git logo", 
        className: "skillImage",
        outsideClassname: ""
    },
    {
        link: "https://marketingplatform.google.com/about/analytics/", 
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Logo_Google_Analytics.svg/845px-Logo_Google_Analytics.svg.png?20210105194419", 
        alt: "Google Analytics logo", 
        title: "Google Analytics", 
        className: "skillImage min-w-4 min-h-4",
        outsideClassname: ""
    },
    {
        link: "https://rive.app/", 
        src: "https://avatars.githubusercontent.com/u/58453772?s=280&v=4", 
        alt: "Rive logo", 
        title: "Rive", 
        className: "skillImage min-w-6 min-h-6",
        outsideClassname: ""
    }
]

export default function Skills() {
    const [organized, setOrganized] = useState(false);

    const organize = () => {
        setOrganized(!organized);
    }

    return (
        <section id="skills" className="flex flex-col justify-center">
            <div className={organized ? "mx-10 md:mx-16 lg:mx-32" : "md:mx-32 mx-10 motion-reduce:md:mx-16 motion-reduce:lg:mx-32"}>
                <div>
                    <h2 className="sectionTitle mt-[7rem]">My Skills</h2>
                </div>
                <div className={organized ? "max-w-4xl mx-auto" : "scroller mx-auto"}>
                    <div className={organized ? "flex flex-row flex-wrap md:flex-nowrap justify-center mb-7 md:mx-0 mx-10 mt-2 max-w-4xl" : "skillsRow scroll_inner"} style={{  "--direction": "forwards" }}>
                        {skillsTR.map((content) => (
                        <div key={content.alt} className={`${organized ? "my-2 border-8 border-transparent rounded-3xl px-4 py-4 mt-3 mx-6 lg:mx-6 md:mx-auto min-w-24 w-24 h-24 max-w-24 max-h-24 flex items-center relative justify-center bg-white dark:bg-neutral-900 organized" : "skill"}` + content.outsideClassname}>
                            <a title={content.title} href={content.link}>
                                <Image alt={content.alt} src={content.src} className={content.className} width=
                                {50} height={50}/>
                            </a>
                        </div>
                        ))}
                        {skillsTR.map((content) => (
                        <div key={content.alt} className={`${organized ? "hidden" : "skill" + content.outsideClassname + " motion-reduce:hidden"}`}>
                            <a title={content.title} href={content.link}>
                                <Image alt={content.alt} src={content.src} className={content.className} width=
                                {50} height={50}/>
                            </a>
                        </div>
                        ))}
                    </div>
                    <div className={organized ? "flex flex-row flex-wrap md:flex-nowrap justify-center mb-7 md:mx-0 mx-10 mt-2 max-w-4xl" : "skillsRow scroll_inner"} style={{ "--direction": "reverse" }}>
                        {skillsBR.map((content) => (
                            <div key={content.alt} className={`${organized ? "my-2 border-8 border-transparent rounded-3xl px-4 py-4 mt-3 mx-6 lg:mx-6 mb-4 md:mx-auto min-w-24 w-24 h-24 max-w-24 max-h-24 flex items-center relative justify-center bg-white dark:bg-neutral-900 organized" : "skill"}` + content.outsideClassname}>
                                <a title={content.title} href={content.link}>
                                    <Image alt={content.alt} src={content.src} className={content.className} width=
                                    {50} height={50}/>
                                </a>
                            </div>
                        ))}
                        {skillsBR.map((content) => (
                        <div key={content.alt} className={`${organized ? "hidden" : "skill" + content.outsideClassname + " motion-reduce:hidden"}`}>
                            <a title={content.title} href={content.link}>
                                <Image alt={content.alt} src={content.src} className={content.className} width=
                                {50} height={50}/>
                            </a>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <Button className="gradientTransition inline-flex items-center rounded-lg py-3 px-8 font-semibold text-md text-white relative before:content-[''] before:absolute before:w-full before:h-full before:outline before:bottom-0 before:left-0 before:rounded-lg before:outline-2 before:outline-transparent before:transition-all before:duration-150 before:ease-in before:hover:outline-offset-2 before:hover:outline-amber-500 before:active:outline-4 before:active:outline-amber-600 mt-10 mx-auto block" onClick={organize}>
                {organized ? "Scroll" : "Organize"}
            </Button>
        </section>
    )
}