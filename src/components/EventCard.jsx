import React from "react";
import { Link } from "react-router-dom";

const EventCard = (props) => {
  
  const isExcelsior = !!props.isExcelsior;
 
  const showViewMore = isExcelsior && !!props.showViewMore;

  return (
    <div className="society-card w-52 h-auto p-3 sm:p-10 border-solid border-2 m-4 rounded-2xl flex flex-col justify-center items-center shadow-lg">
      <img 
        src={props.image} 
        alt={props.name} 
        className="h-full w-auto" 
        onError={(e) => {
          console.error("Image failed to load:", props.image);
          e.target.src = "images/placeholder.png"; // Fallback image
        }}
      />
      
      <h3 className="text-center text-xl font-semibold text-gray-600 mt-2">
        {props.name}
      </h3>
      
      {showViewMore && (
        <Link 
          to="src\components\Excelsior2025\excelsior25.html" target="_blank" 
          className="mt-3 px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
        >
          Know More
        </Link>
      )}
    </div>
  );
};

export default EventCard;
