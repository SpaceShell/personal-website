"use client"

import React from "react";
import TimelinePoint from "./components/timelinePoint";

export default function Experience() {
    return (
        <section className="lg:mx-64 md:mx-32">
            <div>
                <h2 className="sectionTitle">My Experience</h2>
                <div className="flex flex-col gap-16 relative max-w-full after:content-[''] after:w-1.5 after:h-[100%] after:lg:h-[100%] after:bg-gradient-to-b after:from-red-900 dark:after:from-red-700 after:from-90% after:to-transparent after:absolute after:left-[4rem] sm:after:left-[5rem] after:md:left-[228px] after:top-5">
                    <TimelinePoint 
                    date={"July 2023"} 
                    company={"America On Tech"}
                    title={"TECH360 Program"}
                    description={["Selected to participate in a 3-week web development summer bootcamp", "Gained 25+ hours of technical coding training in HTML, CSS, and Bootstrap taught by a professional software engineer.", "Developed a range of projects illustrating a basic understanding of web development", "Presented a final group project consisting of a mock business and an accompanying website to technology professionals"]}
                    />
                    <TimelinePoint 
                    date={"September 2023 - December 2023"} 
                    company={"America On Tech"}
                    title={"Tech Flex Leaders Program - Advanced Web Development Track"}
                    description={["Selected to participate in a year-long program split into two skill tracks", "Completed coding training on HTML, CSS, and Javascript, Repl.it, and Bootstrap", "Paired with technology mentors and professionals to focus on college and career readiness skills", "Developed projects that demonstrate key web development skills with an emphasis on Javascript and API usage"]}
                    />
                    <TimelinePoint 
                    date={"January 2024 - May 2024"} 
                    company={"America On Tech"}
                    title={"Tech Flex Leaders Program - Data Science Track"}
                    description={["Engaged with tools like Python and Jupyter Notebook and libraries like pandas and scikit-learn", "Gathered, curated, and analyzed data for machine learning purposes.", "Worked through the process of developing a machine learning model to ultimately make one with a team and present our findings from it"]}
                    />
                    <TimelinePoint 
                    date={"October 2024 - December 2024"} 
                    company={"Design at UCI"}
                    title={"Project Teams - UI/UX Designer"}
                    description={["Participated in the Project Teams program for Design at UCI", "Engaged in weekly meetings with design professionals discussing the UI/UX process", "Collaborated in a team to ideate, plan, and design an app using Figma", "Conducted user research and usability testing to gather data and improve design decision-making"]}
                    />
                    <TimelinePoint 
                    date={"February 2025 - Present"} 
                    company={"UCI Division of Equal Opportunity and Compliance"}
                    title={"Web Student Assistant"}
                    description={["Maintained the organization of multiple websites within the Cascade and WordPress Content Management Systems", "Updated the frontend content and styling to fix issues faced by users using HTML, CSS, and Javascript", "Validated and ensured that all web pages followed WCAG 2.0/2.1 AA accessibility standards", "Communicated technical aspects of web projects to effectively plan and establish requirements"]}
                    />
                </div>
            </div>
        </section>
    )
}