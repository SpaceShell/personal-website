"use client"

import React from "react";
import FocusAreaCard from "./components/focus-area-card";

export default function Work() {
    return (
        <section className="sectionMargin">
            <div>
                <h2 className="sectionTitle flex justify-center">What I Do</h2>
                    <div className="md:text-left mb-12">
                        <p>Using a blend of software and creative skills, I work to efficiently develop solutions that aid project outcomes by crafting optimized and functional applications ready for clients to use and providing engaging interactivity for users on the frontend. Through masterful problem-solving and a user-focused approach, I aim to ensure the growth and impact of applications I develop as I dedicate myself to the following areas:</p>
                    </div>
                <div className="flex lg:flex-row flex-col gap-10 items-center justify-center md:mx-2">
                    <FocusAreaCard title={"Web Development"} image={"WebDevIcon.svg"} description={"Leading, developing, and maintaining websites while ensuring that they are responsive, effective, and accessible."}/>
                    <FocusAreaCard title={"UI/UX Design"} image={"uiuxIcon.svg"} description={"Creating lo-fi and hi-fi designs for apps and websites using research to figure out how to provide the best experience for users."}/>
                </div>
            </div>
        </section>
    )
}