"use client"

import React from "react";
import TailwindLogo from "../public/tailwindcss-mark.svg";
import NextWordmark from "../public/nextjs-logotype-light-background.svg";

export default function Skills() {
    return (
        <section className="mb-3">
            <div className="md:mx-32 mx-10">
                <div>
                    <h2 className="sectionTitle">My Skills</h2>
                </div>
                <div>
                    <div className="skillsRow scroll-wrapper">
                        <div className="skill">
                            <a href="http://www.w3.org/html/logo/">
                                <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="HTML5 logo" title="HTML5"  className="skillImage"/>
                            </a>
                        </div>
                        <div className="skill">
                            <a title="daPhyre (File:CSS3 and HTML5 logos and wordmarks.svg) Elfi (File:CSS3 logo and wordmark.svg) ExE Boss, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:CSS3_logo.svg">
                                <img className="skillImage" alt="CSS3 logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817"/>
                            </a>
                        </div>
                        <div className="skill">
                            <a title="Tailwind CSS" href="https://tailwindcss.com/">
                                <img className="skillImage" alt="Tailwind CSS logo" src={TailwindLogo.src}/>
                            </a>
                        </div>
                        <div className="skill">
                            <a href="https://getbootstrap.com/">
                                <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="Bootstrap logo" title="Bootstrap"  className="skillImage"/>
                            </a>
                        </div>
                        <div className="skill">
                            <a title="Christopher Williams, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:JavaScript-logo.png">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png?20120221235433" alt="Javascript logo"   className="skillImage"/>
                            </a>
                        </div>
                        <div className="skill">
                            <a title="http://brand.jquery.org, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:JQuery-Logo.svg">
                                <img alt="JQuery logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/512px-JQuery-Logo.svg.png?20200715135602" className="skillImage min-w-4 min-h-4"/>
                            </a>
                        </div>
                    </div>
                    <div className="skillsRow scroll-wrapper">
                        <div className="skill">
                            <a href="https://react.dev/">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" alt="React logo" title="React JS"  className="skillImage"/>
                            </a>
                        </div>
                        <div className="skill">
                            <a href="https://nextjs.org/">
                                <img src={NextWordmark.src} alt="Next JS logo" title="Next JS"  className="skillImage"/>
                            </a>
                        </div>
                        <div className="skill">
                            <a href="https://www.python.org/">
                                <img src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png" alt="Python logo" title="Python"  className="skillImage"/>
                            </a>
                        </div>
                        <div className="skill">
                            <h3 className="skillText">Node JS</h3>
                        </div>
                        <div className="skill">
                            <a href="https://marketingplatform.google.com/about/analytics/">
                                <img src="https://developers.google.com/static/analytics/images/terms/lockup_ic_Google_Analytics_vert_388px_clr.png" alt="Google Analytics logo" title="Google Analytics"  className="skillImage min-w-6 min-h-6"/>
                            </a>
                        </div>
                        <div className="skill">
                            <a href="https://rive.app/">
                                <img src="https://avatars.githubusercontent.com/u/58453772?s=280&v=4" alt="Rive logo" title="Rive"  className="skillImage min-w-6 min-h-6"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}