"use client"

import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LogoLight from "./rive-anims/logoLight";
import LogoDark from "./rive-anims/logoDark"
import Mode from "./rive-anims/mode";

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Skills', href: '#skills' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white dark:bg-neutral-900 shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-4 sm:px-8 lg:px-10">
            <div className="relative flex h-16 xl:h-[4.5rem] items-center justify-between">
              <div className="absolute inset-y-0 right-12 flex items-center sm:hidden">
                <Mode />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <LogoLight />
                  <LogoDark />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "text-gray-400 tracking-wider transition-colors duration-300 hover:text-gray-600 rounded-md px-3 py-2 text-sm xl:text-md font-bold relative after:content-[''] after:absolute after:bg-red-700 after:transition-all after:w-0 hover:after:w-9/12 after:origin-left after:h-0.5 after:right-0 after:left-0 after:mx-auto after:bottom-1.5 active:text-red-900 dark:text-white dark:hover:text-gray-300"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                    <Mode />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel transition className="transition-all overflow-hidden duration-700 ease-out sm:hidden max-h-screen data-[closed]:max-h-0">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "text-gray-400 tracking-wider transition-colors duration-300 hover:text-gray-600 block rounded-md px-3 py-2 text-base tracking-wider font-bold relative after:content-[''] after:absolute after:bg-red-700 after:transition-all after:duration-200 after:w-0 hover:after:w-full after:left-0 after:h-0.5 after:mx-auto after:bottom-1.5 active:text-red-900 dark:text-white dark:hover:text-gray-300"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
