import React from "react";
// import { useNavigate, useParams } from "react-router-dom";

function Card(props) {

    // const navigate = useNavigate()

  return (

    // <div onClick={()=>navigate(`/profile/${props?.des}/${props?.origin}`)}>
    <div class="max-w-sm rounded overflow-hidden shadow-lg" >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.origin}</div>
        <p class="text-gray-700 text-base">
          {props.des}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
         #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
    // </div>
  );
}

export default Card;
