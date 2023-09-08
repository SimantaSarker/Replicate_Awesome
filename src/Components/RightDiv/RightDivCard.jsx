import "../RightDiv/RightDivCard.css";

const RightDivCard = ({ card }) => {
  return (
    <div className="card  h-36 p-3 bg-base-100  flex flex-col items-center justify-center gap-5 card-hover text-center text-xs">
      <figure>
        <img src={card?.icon} alt="Shoes" className="w-8" />
      </figure>
      <p>{card?.name}</p>
    </div>
  );
};

export default RightDivCard;
