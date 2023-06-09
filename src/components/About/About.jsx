import React from 'react'
import { AnimCursor } from '../AnimCursor'
import { TechStack } from './TechStack'

export const About = () => {
  return (
    <>
      <AnimCursor />
      <section class="relative   bg-gray-800 overflow-hidden">
        <div class="relative container px-4 mx-auto">
          <div class="flex flex-wrap items-center bottom-10 -py-80 -mx-4">
            <div class="w-full lg:w-1/6 px-4 text-right">
            </div>
            <div class="w-full lg:w-4/6 px-4">
              <div class="relative text-center mb-14">
                {/* <img class="absolute top-0 right-0 mt-28" src="zospace-assets/images/quote-gray.svg" alt=""/> */}
                <div class="relative">

                  <h2 class="mt-24 mb-16 text-5xl font-bold font-heading text-blue-400">A little about me</h2>
                </div>
                <div class=" mx-auto">
                  <p class="mb-8 text-2xl text-gray-200">I am a passionate web developer with a strong foundation in both frontend and backend frameworks. I possess a comprehensive skill set acquired through training and hands-on experience during my recent completion of an intensive coding bootcamp. I bring a well-rounded skill set to create dynamic and engaging web applications. I thrive on turning ideas into reality, meticulously crafting clean code and intuitive user interfaces.</p>
                  <p class="text-2xl text-blue-400">In my free time, I enjoy playing soccer, surfing, working out, hanging out with friends and family, which help me maintain a healthy work-life balance and bring creativity and inspiration to my work.</p><br></br>
                  <p class="mb-12 text-2xl text-gray-200">I am excited to embark on a professional journey in web development and currently open to opportunities in both frontend and backend roles. I thrive in collaborative environments, leveraging my technical expertise to tackle challenges and deliver innovative solutions. If you are seeking a dedicated and adaptable web developer who is committed to continuous growth, let's connect and explore how we can create remarkable digital experiences together.</p>
                </div>
              </div>
              <div class="flex -mx-4 items-center justify-center">
                <div class="px-4">
                  <img class="w-40 h-50 rounded-full object-cover" src="https://static.shuffle.dev/uploads/files/79/79b6fa37082796c1ac4ce6741c20f4e64293432d/IMG-3037.JPG" alt=""/>
                </div>
                <div class="px-4">

                  <div>
                    <h3 class="mb-1 text-2xl text-white font-bold">Tomer Tal</h3>
                    <p class="text-white">Email me here:</p>
                    <a class="text-blue-300" href="mailto:tomertal18@gmail.com">tomertal18@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <TechStack />
</>  
  )
}
