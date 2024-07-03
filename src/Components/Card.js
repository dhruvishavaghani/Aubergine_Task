import React from "react";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { useRef } from "react";
// import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

function Card(props) {

  const componentRef = useRef();

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.body);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };

  return (
    // <React.Fragment>
    //   <ComponentToPrint ref={componentRef} />
    <div class="max-w-sm rounded overflow-hidden shadow-lg" >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.name}</div>
        <p class="text-gray-700 text-base">
          {props.country}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" 
        onClick={handleCaptureClick }>
         download
        </button>
        
      </div>
    </div>
    // </React.Fragment>
  );
}

export default Card;
