import {  createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import { HTTPCode } from './components/HTTPCode';
import { Home } from './components/Home/Home';
import { NavBar } from './components/NavBar';
import {Projects} from './components/Projects/Projects';
import { About } from './components/About/About';

function App() {
  

  const AppLayout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '*',
          element: <div>404 NOT FOUND</div>
        },
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/about_me',
          element: <About />
        }
      ]
    }

  ])
  return (
   <div>
     
    <RouterProvider router={router}/>
   </div>
  );
}

export default App;
