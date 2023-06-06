import { useState } from 'react'
import pdf from '../../resume.pdf'
import { AnimCursor } from '../AnimCursor';
import { ResumeView } from './ResumeView';



export const Resume = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    
  return (
    <>
        <AnimCursor />
        <div>
        <br></br>
        <div>
        <button><a href={pdf}>Download Resume</a></button>
        </div>
            <br/>
        <div>
            <div>
                <ResumeView file={pdf}/>
            </div>
        </div>
        <br></br>
        </div>
        <p className='text-white'>
        Page {pageNumber} of {numPages}
      </p> 
     </> 
  )
}
