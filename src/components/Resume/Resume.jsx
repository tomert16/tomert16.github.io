import { useState, useEffect } from 'react'
// import { Document, Page, Text, Image, StyleSheet, PDFDownloadLink } from 'react-pdf'
import pdf from '../../resume.pdf'
import { AnimCursor } from '../AnimCursor';
import { ResumeView } from './ResumeView';
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export const Resume = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
//     const [width, setWidth] = useState(1200);


//     useEffect(() => {
//         setWidth(window.innerWidth);
//       }, []);
 function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    // const styles = StyleSheet.create({
    //     body: {
    //         paddingTop: 35,
    //         paddingBottom: 65,
    //         paddingHorizontal: 35,
    //       },
    //       title: {
    //         fontSize: 24,
    //         textAlign: "center",
    //         fontFamily: "AntonFamily",
    //       },
    //       text: {
    //         margin: 12,
    //         fontSize: 14,
    //         textAlign: "justify",
    //         fontFamily: "AntonFamily",
        
    //       },
    //       header: {
    //         fontSize: 12,
    //         marginBottom: 20,
    //         textAlign: "center",
    //         color: "grey",
    //         fontFamily: "AntonFamily",
    //       },
    //       pageNumber: {
    //         position: "absolute",
    //         fontSize: 12,
    //         bottom: 30,
    //         left: 0,
    //         right: 0,
    //         textAlign: "center",
    //         color: "grey",
    //         fontFamily: "AntonFamily",
    //       },
    // })

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
