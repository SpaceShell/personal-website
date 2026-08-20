"use client"

import Tag from "@/app/components/tag";
import Navbar from "@/app/navbar";
import ProjectCarousel from "@/app/components/project-carousel";
import ThemedButton from "@/app/components/ThemedButton";

export default function HomeForHealthyHabits() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col lg:flex-row gap-20 mx-16 md:mx-32 lg:mx-48 my-10">
        <div className="order-last lg:order-first basis-2/5 content-center flex flex-col justify-center items-center">
          <ProjectCarousel 
          image1={"/HomeForHealthyHabits.jpg"}
          image2={"/Bootstrap-Practice/images/HomeForHealthyHabits-Services.png"}
          image3={"/Bootstrap-Practice/images/HomeForHealthyHabits-Contact.png"}
          />
          <div className="flex flex-col items-center gap-5 mt-10">
            <a href="/Bootstrap-Practice/index.html">
              <ThemedButton text={"Go to Website"}/>
            </a>
          </div>
        </div>
        <div className="basis-3/5 content-center">
          <div className="flex flex-col 2xl:flex-row flex-wrap gap-5">
            <Tag tag="#Web" className="block 2xl:hidden"/>
            <h1 className="text-[2.35rem] leading-10 font-bold">Home for Healthy Habits</h1>
            <Tag tag="#Web" className="hidden 2xl:block"/>
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-200 mb-10">TECH360 - Mock Health Organization</p>

          <div className="flex flex-row gap-12 mb-5">
            <div>
              <p className="font-bold">Role:</p>
              <p>Web Developer</p>
            </div>
            <div>
              <p className="font-bold">Top Skills:</p>
              <ul className="list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-lg font-bold">Purpose</h2>
              <p>Home for Healthy Habits was a website developed as part of the TECH360 Bootcamp Program focused on effectively delivering the services of a mock-client's health organization and information about who they are to the public through an online platform.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold">Challenges</h2>
              <p>Home for Healthy Habits was one of the two introductory projects assigned to us as part of the TECH360 program. It was my first time building a multi-page website and using a front-end framework. As a showcase of what we were learning, it was my first challenge in applying what I had learned in the program so far.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold">Outcomes</h2>
              <p>Working on the project and doing hours of research into web development, I was able to successfully develop the website while both fulfilling the requirements of the mock client and implementing creative features such as CSS animations.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
