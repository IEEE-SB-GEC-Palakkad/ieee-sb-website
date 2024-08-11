const AchievementCard = ({ image, name }) => {
  return (
    <div className="relative society-card w-56 h-72 border-solid border-2 m-4 p-4 rounded-2xl flex flex-col justify-between items-center shadow-lg">
      <img
        src={image}
        alt={name}
<<<<<<< HEAD
        className="w-32 h-32 max-w-full max-h-full object-cover"
=======
        className="max-w-full max-h-full rounded-md object-cover"
>>>>>>> origin/experimental
      />
      <h3 className="text-center text-sm font-semibold text-gray-600 rotated-text">
        {name}
      </h3>
    </div>
  );
};

export default AchievementCard;
