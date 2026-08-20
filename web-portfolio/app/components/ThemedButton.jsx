"use client"

import React from "react";
import { Button } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function ThemedButton({text}) {
    return (
            <Button className="gradientTransition w-fit inline-flex items-center rounded-lg py-3 px-8 font-semibold text-md text-white relative before:content-[''] before:absolute before:w-full before:h-full before:outline before:bottom-0 before:left-0 before:rounded-lg before:outline-2 before:outline-transparent before:transition-all before:duration-150 before:ease-in before:hover:outline-offset-2 before:hover:outline-amber-500 before:active:outline-4 before:active:outline-amber-600">
                {text}
                <ChevronRightIcon className="size-5 fill-white"/>
            </Button>
    )
}