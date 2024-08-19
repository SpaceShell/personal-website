"use client"

import React from "react";

export default function Experience() {
    return (
        <section className="mb-9" id="info">
            <div>
                <h2 className="sectionTitle md:mx-32 mx-10 mb-16">My Experience</h2>
                    <div class="relative max-w-full after:content-[''] after:w-1.5 after:h-[42rem] after:bg-gradient-to-b after:from-red-900 after:from-90% after:to-transparent after:absolute after:lg:left-[21rem] after:top-5 mb-[53rem]">
                        <div class="timelineContainer">
                            <p className="absolute text-xl -left-52 text-red-900">July 2023</p>
                            <h2 className="font-extrabold text-2xl">America On Tech</h2>
                            <p className="text-xl">TECH360 Program</p>
                            <p className="timelineText">Selected to participate in a 3-week web development summer bootcamp, where I gained 25+ hours of technical coding training in HTML, CSS, and Bootstrap taught by a professional software engineer. Throughout the program, I developed a range of projects illustrating a basic understanding of web development and at the end, presented a final group project consisting of a mock business and an accompanying website to technology professionals.</p>
                        </div>
                        <div class="timelineContainer top-[18.75rem]">
                            <p className="absolute text-xl -left-64 text-red-900 text-right">September - <br /> December 2023</p>
                            <h2 className="font-extrabold text-2xl">America On Tech</h2>
                            <p className="text-xl">Tech Flex Leaders Progam - Advanced Web Development Track</p>
                            <p className="timelineText">Selected to participate in a year-long program consisting of two skill tracks. In this first part of the program, I delve into web development as I completed coding training utilizing HTML, CSS, and Javascript, Repl.it, and Bootstrap. I was also paired with technology mentors and professionals to focus on college and career readiness skills, and in the end, developed projects that demonstrate key web development skills that focused on Javascript and API usage.</p>
                        </div>
                        <div class="timelineContainer top-[35.75rem]">
                            <p className="absolute text-xl -left-52 text-red-900 text-right">January - <br /> May 2023</p>
                            <h2 className="font-extrabold text-2xl">America On Tech</h2>
                            <p className="text-xl">Tech Flex Leaders Progam - Data Science Track</p>
                            <p className="timelineText">In this second part of the program, I engaged in a track focused on data science, where I was introduced to tools like Python and Jupyter Notebook and libraries like pandas and scikit-learn. I then worked with these resources to gather, analyze, curate, and implement data for machine learning purposes. In attending the weekly sessions with professionals from the program, I worked through the process of developing a machine learning model to ultimately make one with a team and present our findings from it. </p>
                        </div>
                    </div>
                </div>
        </section>
    )
}