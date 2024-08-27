"use client"

import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="footer" className="w-full sm:h-40 bg-red-600 dark:bg-red-700 text-white pb-4 sm:pb-6">
            <ul className="ml-5 sm:ml-10 lg:ml-28 pt-6">
                <p className="text-lg mb-2 font-bold">Ready to connect? Reach out!</p>
                <li className="ml-0">
                    <FaLinkedin className="inline-block size-5 mb-0.5"/>
                    <p className="inline-block ml-2 text-sm"><a href='https://www.linkedin.com/in/steve-luis-616a62313'>Steve Luis</a></p>
                </li>
                <li className="ml-0">
                    <MdMailOutline className="inline-block size-5"/>
                    <p className="inline-block ml-2 text-sm"><a href="mailto:sluis27901@gmail.com">sluis27901@gmail.com</a></p>
                </li>
                <li className="ml-0">
                    <FaGithub className="inline-block size-5"/>
                    <p className="inline-block ml-2 text-sm"><a href="https://github.com/SpaceShell">SpaceShell</a></p>
                </li>
            </ul>
            <p className="ml-10 mt-8 sm:ml-0 sm:mt-0 text-right text-sm mr-5 sm:mr-10">Built using React, Next.js, and Tailwind CSS</p>
        </footer>
    )
}