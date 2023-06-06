import React from 'react'

export const HTTPCode = () => {
  return (
    <div>
        <section class="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
            <img class="absolute top-0 right-0 md:-mr-96 md:-mt-112" src="zospace-assets/lines/circle.svg" alt=""/>
            <img class="absolute top-0 right-0 h-40 lg:h-80 lg:mr-64 lg:mt-24" src="zospace-assets/images/five-stars.svg" alt=""/>
            <img class="hidden lg:block absolute top-0 left-0 h-64 -ml-10" src="zospace-assets/images/blue-double-circle.svg" alt=""/>
            <img class="absolute bottom-0 left-0 h-80" src="zospace-assets/lines/half-double-circle.svg" alt=""/>
            <div class="relative container px-4 mx-auto">
                <div class="max-w-3xl mx-auto">
                <div class="max-w-xl">
                    <a class="inline-block text-white text-xl font-bold" href="#">
                    <img class="h-7" src="zospace-assets/logos/zospace-logo.svg" alt="" width="auto"/>
                    </a>
                    <h2 class="mt-12 mb-14 text-5xl font-bold font-heading text-white">Sorry, we can't find that page or something has gone wrong...</h2>
                    <p class="mb-20 text-xl text-gray-200">Go back or try here:</p>
                    <a class="inline-block px-12 py-4 text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200" href="#">Start again</a>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
