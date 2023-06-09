import React from 'react'
import { ProjectCard } from './ProjectCard'
import baro from '../../images/baro.png';
import pnp from '../../images/pnp.png';
import space from '../../images/space.png';
import netflix from '../../images/netflix.png';
import { AnimCursor } from '../AnimCursor';

export const Projects = () => {
  return (
    <>
        <AnimCursor />
        <section class="py-40 2xl:py-60 bg-gray-800 overflow-hidden" >
          <div class="container px-4 mx-auto">
          <div class="header mb-20 text-center absolute inset-x-0 -top-28 lg:-top-44">
            <h2 class="mt-8 text-4xl lg:text-7xl sm:mt-4 text-white font-bold font-heading">My Projects</h2>
            <br></br>
            <span class="text-lg text-blue-400 font-bold">Here Are A Few Projects That I Worked On</span>
          </div>
            <div class="flex flex-wrap justify-center gap-32 mr:20 lg:mr-32">
              <div class="w-full md:w-1/2 lg:w-1/4 p-5">
                <ProjectCard 
                    image={netflix}
                    title="Netflix Clone"
                    description="A Netflix clone built using React.js for the frontend, along with CSS using styled components and a touch of Tailwind CSS. The project incorporates Firebase Authentication for seamless login and signup functionality. On the backend, I utilized Node.js and Express, with SQLite3 serving as the database, and integrated the TMDB API for fetching movies and shows."
                    frontend="https://github.com/tomert16/netflix-clone-app"
                    completed={true}
                />
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 p-5">
                <ProjectCard 
                    image={pnp}
                    title="Pick N Play"
                    description="Discover the thrill of spontaneous sports activities with this dynamic web application, built with React.js and Ruby on Rails. Seamlessly find and join pick-up games in your area, while also having the freedom to create and organize your own games, all within a vibrant community of sports enthusiasts."
                    frontend="https://github.com/tomert16/pick-n-play-frontend"
                    backend="https://github.com/tomert16/pick-n-play-backend"
                    completed={false}
                />
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 p-5">
                <ProjectCard 
                    image={space}
                    title="Space Travel Simulator"
                    description="Space travel calculator, built with Javascript, HTML, CSS. Calculates the distance and travel time between planets, moons, and even offers different modes of transportation. It provides users with accurate estimates based on scientific data, allowing them to explore the distances and travel times within our solar system. Built collabrativly with James Prawdzik, Avinash Ramsumair, and Jason Mejia"
                    frontend="https://github.com/tomert16/Phase-1-Final-Group-Project"
                    completed={true}
                />
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
