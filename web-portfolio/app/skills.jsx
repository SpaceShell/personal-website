"use client"

import React from "react";
import Flower from "./rive-anims/flower-anim";
import Bud from "./rive-anims/bud-anim";
import Grown from "./rive-anims/grownSprout-anim";
import Sprout from "./rive-anims/sprout-anim";

export default function Skills() {
    return (
        <section className="py-4 mb-10">
            <div className="md:mx-32 mx-10">
                <div>
                    <h2 className="sectionTitle">My Skills</h2>
                </div>
                <div>
                    <div className="skillsRow">
                        <div className="skill">
                            <Flower />
                            <h3 className="skillText">HTML</h3>
                        </div>
                        <div className="skill">
                            <Flower />
                            <h3 className="skillText">CSS</h3>
                        </div>
                        <div className="skill">
                            <Flower />
                            <h3 className="skillText">Tailwind CSS</h3>
                        </div>
                        <div className="skill">
                            <Flower />
                            <h3 className="skillText">Bootstrap</h3>
                        </div>
                        <div className="skill">
                            <Flower />
                            <h3 className="skillText">Javascript</h3>
                        </div>
                        <div className="skill">
                            <Bud />
                            <h3 className="skillText">JQuery</h3>
                        </div>
                        <div className="skill">
                            <Grown />
                            <h3 className="skillText">React JS</h3>
                        </div>
                        <div className="skill">
                            <Grown />
                            <h3 className="skillText">Next JS</h3>
                        </div>
                        <div className="skill">
                            <Grown />
                            <h3 className="skillText">Python</h3>
                        </div>
                        <div className="skill">
                            <Sprout />
                            <h3 className="skillText">Node JS</h3>
                        </div>
                        <div className="skill">
                            <Sprout />
                            <h3 className="skillText">Google Analytics</h3>
                        </div>
                        <div className="skill">
                            <Sprout />
                            <h3 className="skillText">Rive</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}