"use client"

import React from "react";
import healthyWeb from '../public/HomeForHealthyHabits.jpg';
import pokeWeb from '../public/AshantiPokeWeb.jpg';
import dataScience from '../public/DataScience.jpg';
import ProjectSlide from './projectSlide.jsx'

export default function Projects() {
    return (
        <section id="portfolio" className="mb-28 mt-72">
            <div className="mx-10 lg:mx-32">
                <h2 className="sectionTitle">My Projects</h2>
                <div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-around">
                    <ProjectSlide 
                        projImage={healthyWeb} 
                        title="Home for Healthy Habits" 
                        description="A website developed as part of the TECH360 Bootcamp Program focused on effectively delivering the services of and information about a mock-client's health organization to the public through an online platform."
                        topSkills={["HTML", "CSS", "Bootstrap"]}
                        addedClasses="lg:mr-4"
                        href="/Bootstrap-Practice/index.html"
                        codeLink="https://replit.com/@sluis27901/Bootstrap-Practice?v=1"

                    />
                    <ProjectSlide 
                        projImage={pokeWeb} 
                        title="Ashanti's PokeWeb" 
                        description="A fun, engaging mock-website developed in a team using the Pokemon API for Pokemon enthusiasts to interact with, gain access to Pokemon knowledge, and view merchandise, being one of the final projects for the Tech Flex Leaders Program."
                        topSkills={["HTML", "CSS", "Javascript"]}
                        addedClasses=""
                        href="/Pokemon-Project/index.html"
                        codeLink="https://replit.com/@ReashaSharma/PokemonProjectTuesBGroup1?v=1"
                    />
                    <ProjectSlide 
                        projImage={dataScience} 
                        title="Data Science Machine Learning" 
                        description="A research project developed within the Tech Flex Leaders Program that analyzes a mental health dataset, curates the data in it, and utilizes the curated data to create a machine learning model capable of predicting correlations on the likelihood of someone having anxiety."
                        topSkills={["Python", "Pandas", "Scikit-learn"]}
                        addedClasses="lg:ml-4"
                        href="Team-7-Data-Science-Final-Project.pdf"
                        codeLink=""
                    />
                </div>
            </div>
        </section>
    )
}