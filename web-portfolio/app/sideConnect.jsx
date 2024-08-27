"use client"

import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export default function SideConnect() {
    return (
        <aside className='hidden lg:block fixed left-2 h-full w-1/12 after:content-[""] before:w-1 before:h-2/3 before:bg-gray-400 before:block before:mx-auto before:sticky'>
            <a href='https://www.linkedin.com/in/steve-luis-616a62313'>
                <FaLinkedin className='mx-auto mt-4 size-9 text-gray-700 dark:text-gray-100'/>
            </a>
            <a href='mailto:sluis27901@gmail.com'>
                <MdMailOutline className='mx-auto mt-3 size-9 text-gray-700 dark:text-gray-100'/>
            </a>
        </aside>
    )
}