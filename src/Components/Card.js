import React from "react";

function Card(props) {

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg" >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.name}</div>
        <p class="text-gray-700 text-base">
          {props.country}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
         download
        </button>
        
      </div>
    </div>
    // </div>
  );
}

export default Card;
