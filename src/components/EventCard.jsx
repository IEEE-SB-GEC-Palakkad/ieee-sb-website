const EventCard = (props) => {
    return (
      <div className="society-card w-52 h-36 p-3 sm:p-10 border-solid border-2 m-4 rounded-2xl flex flex-col justify-center items-center shadow-lg">
        <img src={props.image} alt={props.name}  className="h-full w-auto"/>
        <h3 className="text-center text-xl font-semibold text-gray-600">{props.name}</h3>
      </div>
    );
  };
  
  export default EventCard;
  