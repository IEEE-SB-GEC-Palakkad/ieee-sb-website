import React, { useState } from "react";

const EventCard = (props) => {
  const [showPdf, setShowPdf] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

 
  const togglePdf = () => {
    setShowPdf(!showPdf);
    if (fullscreen) setFullscreen(false);
  };

 
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <>
      {/* Fullscreen PDF overlay */}
      {fullscreen && showPdf && props.pdf && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="relative w-full h-full max-w-7xl max-h-screen p-4">
            <button 
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 z-10 bg-red-600 text-white p-2 rounded-full"
            >
              ✕
            </button>
            <iframe
              src={props.pdf}
              title={`PDF for ${props.name}`}
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      )}

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
          <div className="flex flex-col space-y-2 mt-2">
            <button
              onClick={togglePdf}
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
            >
              {showPdf ? "View Image" : "View PDF"}
            </button>
            
            {showPdf && props.enableFullscreen && (
              <button
                onClick={toggleFullscreen}
                className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-red-100"
              >
                Fullscreen
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default EventCard;