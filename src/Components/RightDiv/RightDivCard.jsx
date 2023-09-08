const RightDivCard = ({card}) => {
  const {icon}=card;
  console.log(icon);
  return (
    <div className="bg-base-100 shadow-xl rounded-2xl">
      <figure>
        <img
          src={icon}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p>{card?.name}</p>
      </div>
    </div>
  );
};

export default RightDivCard;
