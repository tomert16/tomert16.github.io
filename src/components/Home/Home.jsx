import React from 'react'
import { AnimCursor } from '../AnimCursor'
import { Contact } from './Contact'
import { SlideShow } from './SlideShow'
import { Statements } from './Statements'

export const Home = () => {
    return (
        <>
        <AnimCursor />
        <section className="relative pr-10 md:pr-48 pb-20 bg-gray-800 overflow-hidden">
          <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-zospace-1"></div>
          <div className="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6"></div>
          <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
            <div className="2xl:block absolute -bottom-20 w-3/5 mb-10 lg:mb-20 h-2 border-b border-white"></div>
            <div className="flex flex-col lg:flex-row -mx-4">
              <div
                id="headers"
                className="w-full lg:w-2/5 px-4 mb-10 lg:mb-0 -mr-52 lg:mr-32"
              >
                <span className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-200 to-blue-600">
                  Tomer Tal
                </span>
                <h3 className="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-8 lg:mb-12 text-6xl lg:text-7xl 2xl:text-8xl text-white font-bold font-heading">
                  Web Developer
                </h3>
                <p className="mb-6 lg:mb-10 text-base lg:text-lg text-white  opacity-90 sm:max-w-sm md:max-w-md">
                    <Statements />
                </p>
              </div>
              <div className="w-full lg:w-3/5 px-4 mt-10 lg:mt-0 hidden lg:block">
                <SlideShow />
              </div>
            </div>
          </div>
          <br></br>
            <Contact />
        </section>
      </>
    );
  };