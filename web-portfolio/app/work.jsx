"use client"

import React from "react";
import responsiveIcon from "../public/ResponsiveIcon.svg";
import webdevIcon from "../public/WebDevIcon.svg";
import uiuxIcon from "../public/UIUXIcon.svg";
import webDevImage from '../public/webdevImage.png'

export default function Work() {
    return (
        <section className="py-4 mb-10" id="info">
            <div>
                <h2 className="sectionTitle md:mx-32 mx-10">What I Do</h2>
                <div className="flex flex-row">
                <img src={webDevImage.src} className="max-w-20 h-48 basis-1/2"></img>
                <p className="md:mx-32 mx-10 basis-1/2">Using a blend of web technology and creative skills, I work to plan as well as efficiently develop web solutions that aid business outcomes by crafting functionally optimized applications ready for clients to use and providing engaging interactivity for users on the frontend. Through masterful problem-solving and a user-focused approach, I ensure the growth and impact of applications developed as I dedicate myself on the following:</p>
                </div>
                <div className="flex lg:flex-row flex-col justify-around md:mx-24 mx-16">
                    <div className="cards lg:ml-5">
                        <img src={responsiveIcon.src} className="cardIcons"></img>
                        <h3 className="cardsInnerTitle">Responsive Design</h3>
                        <p className="cardsInnerText">I design websites so that they adapt to any screen, whether large or small, and fully work on any device, allowing all users to smoothly and comfortably utilize them from anywhere.</p>
                    </div>
                    <div className="cards lg:mx-10">
                        <img src={webdevIcon.src} className="cardIcons"></img>
                        <h3 className="cardsInnerTitle">Web Development</h3>
                        <p className="cardsInnerText">I code websites from start to finish and continue working with them after deployment on their maintenance, altogether striving to innovate new applications with various modern web technology.</p>
                    </div>
                    <div className="cards lg:mr-5">
                        <img src={uiuxIcon.src} className="cardIcons"></img>
                        <h3 className="cardsInnerTitle">UI/UX Design</h3>
                        <p className="cardsInnerText">With each application, I focus on designing easy-to-navigate interfaces and finding ways to connect with users through engaging visuals such as animations to improve the quality of the user experience. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}