import { Document, Page } from 'react-pdf';
import 'react-pdf';


export const ResumeView = ({file}) => {
  return (
    <>
        <Document file={file}>
            <Page />
        </Document>
    </>
  )
}
