const SocietyCard = (props) => {
  return (
    <div className="society-card w-40 h-28 p-10 border-solid border-2 m-4 rounded-2xl flex justify-center items-center shadow-lg">
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default SocietyCard;
