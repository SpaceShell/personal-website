"use client"

import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="w-full h-36 bg-red-600 text-white">
            <ul className="ml-28 pt-6">
                <p className="text-lg mb-2 font-bold">Ready to connect? Reach out!</p>
                <li className="ml-0">
                    <FaLinkedin className="inline-block size-5 mb-0.5"/>
                    <p className="inline-block ml-2 text-sm">Steve Luis</p>
                </li>
                <li className="ml-0">
                    <MdMailOutline className="inline-block size-5"/>
                    <p className="inline-block ml-2 text-sm"><a href="mailto:sluis27901@gmail.com">sluis27901@gmail.com</a></p>
                </li>
            </ul>
            <p className="float-right text-sm mr-10">Built using React, Next.js, and Tailwind CSS</p>
        </footer>
    )
}