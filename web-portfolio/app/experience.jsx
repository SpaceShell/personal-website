"use client"

import React from "react";

export default function Experience() {
    return (
        <section>
            <div>
                <h2 className="sectionTitle md:mx-32 mx-10 mb-16">My Experience</h2>
                    <div className="relative max-w-full after:content-[''] after:w-1.5 after:h-[105%] after:lg:h-[130%] after:bg-gradient-to-b after:from-red-900 dark:after:from-red-700 after:from-90% after:to-transparent after:absolute after:left-[4rem] sm:after:left-[5rem] after:lg:left-[21rem] after:md:left-[15rem] after:top-5">
                        <div className="timelineContainer">
                            <p className="timelineDate md:text-right">July 2023</p>
                            <h2 className="font-extrabold text-2xl">America On Tech</h2>
                            <p className="text-xl">TECH360 Program</p>
                            <p className="timelineText">Selected to participate in a 3-week web development summer bootcamp, where I gained 25+ hours of technical coding training in HTML, CSS, and Bootstrap taught by a professional software engineer. Throughout the program, I developed a range of projects illustrating a basic understanding of web development and at the end, presented a final group project consisting of a mock business and an accompanying website to technology professionals.</p>
                        </div>
                        <div className="timelineContainer top-[5rem]">
                            <p className="timelineDate">September 2023 - <br className="hidden md:block" /> December 2023</p>
                            <h2 className="font-extrabold text-2xl">America On Tech</h2>
                            <p className="text-xl">Tech Flex Leaders Program - Advanced Web Development Track</p>
                            <p className="timelineText">Selected to participate in a year-long program split into two skill tracks. In the first part of the Tech Flex Leaders program, I delved into web development as I completed coding training utilizing HTML, CSS, and Javascript, Repl.it, and Bootstrap. I was also paired with technology mentors and professionals to focus on college and career readiness skills, and developed projects that demonstrate key web development skills with an emphasis on Javascript and API usage.</p>
                        </div>
                        <div className="timelineContainer top-[10rem]">
                            <p className="timelineDate">January 2023 - <br className="hidden md:block" /> May 2023</p>
                            <h2 className="font-extrabold text-2xl">America On Tech</h2>
                            <p className="text-xl">Tech Flex Leaders Program - Data Science Track</p>
                            <p className="timelineText">In this second part of the Tech Flex Leaders program, I engaged in a learning track focused on data science, where I was introduced to tools like Python and Jupyter Notebook and libraries like pandas and scikit-learn. Using these resources, I gathered, analyzed, curated, and implemented data for machine learning purposes. In attending the weekly sessions with professionals from the program, I worked through the process of developing a machine learning model to ultimately make one with a team and present our findings from it. </p>
                        </div>
                        <div className="timelineContainer top-[15rem]">
                            <p className="timelineDate">October 2024 - <br className="hidden md:block" /> December 2024</p>
                            <h2 className="font-extrabold text-2xl">Design at UCI</h2>
                            <p className="text-xl">Project Teams - UI/UX Designer</p>
                            <p className="timelineText">Participated in the Project Teams program for Design at UCI, where I engaged in weekly meetings with design professionals discussing the UI/UX process, collaborated in a team to ideate, plan, and design an app using Figma, and conducted user research and usability testing to gather data and improve design decision-making.</p>
                        </div>
                        <div className="timelineContainer top-[20rem]">
                            <p className="timelineDate">Febuary 2025 - <br className="hidden md:block" /> Present</p>
                            <h2 className="font-extrabold text-2xl">UCI Division of Equal Opportunity and Compliance</h2>
                            <p className="text-xl">Web Student Assistant</p>
                            <p className="timelineText"> Maintained the organization of multiple websites within the Cascade and WordPress Content Management Systems, updated the frontend content and styling to fix issues faced by users using HTML, CSS, and Javascript, validated and ensured that all web pages followed WCAG 2.0/2.1 AA accessibility standards, and communicated technical aspects of web projects to effectively plan and establish requirements.</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}