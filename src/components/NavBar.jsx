import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SocialIcon } from 'react-social-icons';
import { BiHomeSmile } from 'react-icons/bi';
import { GoGitBranch } from 'react-icons/go';
import pdf from './../resume.pdf'

export const NavBar = () => {
  const navigate = useNavigate();
  //toggle navbar 
  const [displayNavBar, setDisplayNavBar] = useState(false);
  // const [onHover, setOnHover] = useState(true);
  const handleDisplayNavBar = () => {
    setDisplayNavBar(!displayNavBar);
  }

  return (
    <>
      <section class="py-8 px-4 lg:px-20 bg-gray-800" >
        <nav class="relative flex justify-between items-center">
          <button class="btn" onClick={() => navigate('/')}> 
            <BiHomeSmile size='2em'/>
          </button>
          <div class="lg:hidden">
            <button class="p-2 navbar-burger" onClick={handleDisplayNavBar}>
              <svg class="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39" height="2" rx="1" fill="#C4C4C4"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect></svg>
            </button>
          </div>
          <div class="hidden lg:block ml-auto mr-16">
            <ul class="flex items-center text-white space-x-10">
              <li>
              <button data-text="Awesome" class="button" onClick={() => navigate('/about_me')}>
                  <span class="actual-text">&nbsp;about&nbsp;</span>
                  <span class="hover-text" aria-hidden="true">&nbsp;about&nbsp;</span>
              </button>
              </li>
              <span>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle></svg>
              </span>
              <li>
              <button data-text="Awesome" class="button" onClick={() => navigate('/projects')}>
                  <span class="actual-text">&nbsp;projects&nbsp;</span>
                  <span class="hover-text" aria-hidden="true">&nbsp;projects&nbsp;</span>
              </button>
              </li>
              <span>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle></svg>
              </span>
              <li>
              <a href={pdf} target="_blank" rel="noreferrer">
                <button data-text="Awesome" class="button">
                  <span class="actual-text">&nbsp;resume&nbsp;</span>
                  <span class="hover-text" aria-hidden="true">&nbsp;resume&nbsp;</span>
                </button>
              </a>
              </li>
            </ul>
          </div>
          <div class="hidden lg:block">
            <a class="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full" href="#">
              <a href='https://github.com/tomert16/tomert16.github.io' target="_blank" rel="noreferrer" class="repo-btn">
                <GoGitBranch size='2em'/>
              </a>
            </a>
          </div>
        </nav>
        {displayNavBar ? <div class="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav class="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
            <div class="flex items-center mb-16 pr-6">
              <a class="ml-10 text-2xl text-gray-800 font-bold" href="/">
                <BiHomeSmile />
              </a>
            </div>
            <div>
              <ul>
                <li class="mb-1 px-10"><button class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" onClick={() => {navigate("/about_me"); setDisplayNavBar(false)}}>About</button></li>
                <li class="mb-1 px-10"><button class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" onClick={() => {navigate("/projects"); setDisplayNavBar(false)}}>Projects</button></li>
                <li class="mb-1 px-10"><a class="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href={pdf} target="_blank" rel="noreferrer">Resume</a></li>
              </ul>
            </div> 
          </nav>
        </div> 
        : 
        null}
      </section>
    </>
  )
}

