"use client"

import React from "react";
import ProjectSlide from './components/projectSlide.jsx';
import healthyWeb from '../public/Bootstrap-Practice/images/HomeForHealthyHabits.jpg';
import pokeWeb from '../public/AshantiPokeWeb.jpg';
import dataScience from '../public/DataScience.jpg';
import bookIt from '../public/BookItLogo.png';
import quotebook from '../public/quotebook.png';
import tccoc from '../public/TCCOC/tccoc.png'

export default function Projects() {
    return (
        <section id="portfolio" className="mb-28">
            <div className="sectionMargin">
                <h2 className="sectionTitle">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
                    <ProjectSlide 
                        projImage={tccoc} 
                        title={'TCCOC Website'}
                        subtitle="TCCOC - Website Modernization"
                        description="A live website developed with the aim of modernizing the Taiwanese Chamber of Commerce in Orange County's (TCCOC) website by improving the visualization of its brand and incorporating new features to help the non-profit reach its membership goals."
                        topSkills={["WordPress", "Elementor", "Project Management"]}
                        addedClasses=""
                        href="/projects/tccoc"
                        codeLink=""
                    />

                    <ProjectSlide 
                        projImage={bookIt} 
                        title={'BookIt | Study Spot Finder'}
                        subtitle="Project Teams - Final App Design"
                        description="A collaborative finalized Hi-Fi wireframe for the BookIt app designed as part of Project Teams. Using Figma, designs were made for the layout, logo, prototype, branding, and final presentation of the app and our team's overall design process."
                        topSkills={["Figma", "User Interface", "User Experience"]}
                        addedClasses="whitespace-pre-wrap"
                        href="https://www.figma.com/design/JEQtNkGZ0utko5lmWYo5z7/Hi-Fi-Wireframes?node-id=0-1&p=f"
                        codeLink=""
                    />
                    <ProjectSlide 
                        projImage={quotebook} 
                        title={'Quotebook'}
                        subtitle="Hack at UCI - Tech Deliverable"
                        description="Quotebook is a demo web platform for users to submit quotes and view what others in the community have posted. Built with a React frontend and Python backend, Quotebook stores quotes locally and is able to filter through them based on the date posted."
                        topSkills={["React", "Javascript", "Python"]}
                        addedClasses="whitespace-pre-wrap"
                        href="https://github.com/SpaceShell/quotebook-tech-deliverable"
                        codeLink="https://github.com/SpaceShell/quotebook-tech-deliverable"
                    />
                    <ProjectSlide 
                        projImage={dataScience} 
                        title="Data Science Machine Learning" 
                        subtitle="Tech Flex Leaders - Data Science Project"
                        description="A research project developed within the Tech Flex Leaders Program that analyzes a mental health dataset, curates the data in it, and utilizes the curated data to create a machine learning model capable of predicting correlations on the likelihood of someone having anxiety."
                        topSkills={["Python", "Pandas", "Scikit-learn"]}
                        addedClasses=""
                        href="Team-7-Data-Science-Final-Project.pdf"
                        codeLink=""
                    />
                    <ProjectSlide 
                        projImage={pokeWeb} 
                        title="Ashanti's PokeWeb" 
                        subtitle="TECH360 - Final Project"
                        description="A fun, engaging mock-website developed in a team using the Pokemon API for Pokemon enthusiasts to interact with, gain access to Pokemon knowledge, and view merchandise, being one of the final projects for the Tech Flex Leaders Program."
                        topSkills={["HTML", "CSS", "Javascript"]}
                        addedClasses=""
                        href="/Pokemon-Project/index.html"
                        codeLink=""
                    />
                    <ProjectSlide 
                        projImage={healthyWeb} 
                        title="Home for Healthy Habits" 
                        subtitle="TECH360 - Mock Client Health Platform"
                        description="A website developed as part of the TECH360 Bootcamp Program focused on effectively delivering the services of a mock-client's health organization and information about who they are to the public through an online platform."
                        topSkills={["HTML", "CSS", "Bootstrap"]}
                        addedClasses=""
                        href="/projects/home-for-healthy-habits"
                        codeLink=""
                    />
                </div>
            </div>
        </section>
    )
}