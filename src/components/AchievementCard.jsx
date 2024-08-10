const AchievementCard = ({ image, name }) => {
  return (
    <div className="relative society-card w-56 h-72 border-solid border-2 m-4 p-4 rounded-2xl flex flex-col justify-between items-center shadow-lg">
      <img
        src={image}
        alt={name}
        className="max-w-full max-h-full rounded-md object-cover"
      />
      <h3 className="text-center text-sm font-semibold text-gray-600 rotated-text">
        {name}
      </h3>
    </div>
  );
};

export default AchievementCard;
