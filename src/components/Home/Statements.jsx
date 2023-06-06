import React from 'react'
import Typewriter from 'typewriter-effect';


export const Statements = () => {
  return (
    <>
        <Typewriter 
            options={{
                strings: ['Strive to blend creativity with functionality', 'Crafting visually appealing and user-friendly websites','Passionate about translating ideas into interactive digital experiences' ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    </>
  )
}
