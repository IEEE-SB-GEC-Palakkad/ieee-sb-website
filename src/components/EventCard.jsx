import React, { useState } from "react";

const EventCard = (props) => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="society-card w-52 h-auto p-3 sm:p-10 border-solid border-2 m-4 rounded-2xl flex flex-col justify-center items-center shadow-lg">
      {showPdf && props.pdf ? (
        <div className="pdf-container w-full" style={{ height: "200px" }}>
          <iframe
            src={props.pdf}
            title={`PDF for ${props.name}`}
            className="w-full h-full"
          ></iframe>
        </div>
      ) : (
        <img 
          src={props.image} 
          alt={props.name} 
          className="h-full w-auto" 
          onError={(e) => {
            console.error("Image failed to load:", props.image);
            e.target.src = "images/placeholder.png"; // Fallback image
          }}
        />
      )}
      
      <h3 className="text-center text-xl font-semibold text-gray-600 mt-2">
        {props.name}
      </h3>
      
      {props.pdf && (
        <button
          onClick={() => setShowPdf(!showPdf)}
          className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
        >
          {showPdf ? "View Image" : "View PDF"}
        </button>
      )}
    </div>
  );
};

export default EventCard;