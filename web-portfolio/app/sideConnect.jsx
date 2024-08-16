"use client"

import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export default function SideConnect() {
    return (
        <aside className='fixed h-full w-1/12 after:content-[""] before:w-1 before:h-2/3 before:bg-gray-400 before:block before:mx-auto before:sticky'>
            <FaLinkedin className='mx-auto mt-4 size-9'/>
            <MdMailOutline className='mx-auto mt-3 size-9'/>
        </aside>
    )
}