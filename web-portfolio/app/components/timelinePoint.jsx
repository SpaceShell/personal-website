"use client"

import React from "react";

export default function TimelinePoint({date, company, title, description}) {
    return (
        <div className="timelineContainer">
            <p className="timelineDate md:text-right">{date}</p>
            <h2 className="font-extrabold text-2xl">{company}</h2>
            <p className="text-xl">{title}</p>
            <ul className="timelineText">{
            description.map((point, i) => (
                <li className="list-disc" key={i}>{point}</li>
            ))
            }</ul>
        </div>
    )
}