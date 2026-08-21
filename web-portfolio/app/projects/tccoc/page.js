"use client"

import Tag from "@/app/components/tag";
import ProjectCarousel from "@/app/components/project-carousel";
import ThemedButton from "@/app/components/ThemedButton";
import ProjectOuterTemplate from "../project-outer-template";
import ProjectFirstColumnContainer from "../project-first-column-container";
import ProjectSecondColumnContainer from "../project-second-column-container";

export default function HomeForHealthyHabits() {
  return (
    <ProjectOuterTemplate>
        <ProjectFirstColumnContainer>
          <ProjectCarousel 
          image1={"/tccoc/tccoc.png"}
          image2={"/tccoc/tccoc-Purpose.png"}
          image3={"/tccoc/tccoc-Membership.png"}
          />
          <div className="flex flex-col items-center gap-5 mt-10">
            <a href="https://www.tccoc.net/">
              <ThemedButton text={"Visit Website"}/>
            </a>
          </div>
        </ProjectFirstColumnContainer>
        <ProjectSecondColumnContainer>
          <div className="flex flex-col 2xl:flex-row flex-wrap gap-5">
            <Tag tag="#Web" className="block 2xl:hidden"/>
            <h1 className="text-[2.35rem] leading-10 font-bold">TCCOC Website</h1>
            <Tag tag="#Web" className="hidden 2xl:block"/>
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-200 mb-10">TCCOC - Website Modernization</p>

          <div className="flex flex-row gap-12 mb-5">
            <div>
              <p className="font-bold">Role:</p>
              <p>Wordpress Developer</p>
            </div>
            <div>
              <p className="font-bold">Top Skills:</p>
              <ul className="list-disc">
                <li>Wordpress</li>
                <li>Elementor</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-lg font-bold">Purpose</h2>
              <p>A live website designed and developed with the aim of modernizing the Taiwanese Chamber of Commerce in Orange County's (TCCOC) website by improving the visualization of its brand and incorporating new features to help the non-profit reach its membership goals.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold">Challenges</h2>
              <p>In order to build the website, I had to make sure I fully understood TCCOC's goals. Being my first time leading a project from scratch for a client, it was a challenge getting an understand how TCCOC aimed to present itself while fully starting over from their old website. Additionally, there were multiple times during development where we have to pivot from plans we established as a result of plugins not working as needed in practice, change in requirements, and communication issues.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold">Outcomes</h2>
              <p>Upon the completion of this project, I had conducted research to come up with the tech stack while keeping in mind the company's requirements, effectively communicated with TCCOC's leadership in regards to design choices and goals to better understand their vision, and deployed a live website with an AI chatbot and member management integration. The website was able to help the nonprofit in having a centralized platform for events and a more user-friendly hub of information when promoting themselves, ultimately improving member engagement.</p>
            </div>
          </div>
        </ProjectSecondColumnContainer>
    </ProjectOuterTemplate>
  );
}
