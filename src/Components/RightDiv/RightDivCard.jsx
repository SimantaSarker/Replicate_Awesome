import "../RightDiv/RightDivCard.css"

const RightDivCard = ({card}) => {
  
  return (
    <div className="card w-44 h-44 bg-base-100  flex flex-col items-center justify-center gap-4 card-hover">
      <figure>
        <img
          src={card?.icon}
          alt="Shoes"
         className="w-10"
        />
      </figure>
      <p>{card?.name}</p>
     
    </div>
  );
};

export default RightDivCard;
