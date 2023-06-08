import React from 'react'
import { AnimCursor } from '../AnimCursor'
import { Contact } from './Contact'
import { SlideShow } from './SlideShow'
import { Statements } from './Statements'

export const Home = () => {
  return (
    <>
        <AnimCursor />
        <section class="relative pr-48 pb-20 bg-gray-800 overflow-hidden">
            <div class="absolute bottom-0 inset-x-0 h-full bg-gradient-zospace-1"></div>
            <div class="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6"></div>
            <div class="relative container px-4 pt-12 md:pt-20 mx-auto">
            <div class=" 2xl:block absolute -bottom-20 w-3/5 mb-20 h-2 border-b border-white"></div>
            <div class="flex flex-col lg:flex-row -mx-4">
                <div class="w-full lg:w-2/5 px-4 mb-60 mb:mb-20 lg:mb-0 mr-36">
                    <span class="text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-200 to-blue-600">Tomer Tal</span>
                    <h3 class="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 mb:mb-20 text-6xl lg:text-8xl 2xl:text-10xl text-white font-bold font-heading">Web Developer</h3>
                    <p class="mb-12 lg:mb-24 text-lg text-white opacity-90">
                        <Statements />
                    </p>
                </div>
                <div class="w-full lg:w-3/5 px-4">
                <SlideShow />
                </div>
            </div>
            </div>
            <br></br>
        <Contact />
      </section>
    </>
  )
}
