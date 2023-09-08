import RightDivCard from "./RightDivCard";

const RightDiv = ({ data, filteredArray }) => {
  return (
    <div className="font">
      <div className="flex justify-between">
        <p className="font-semibold text-xl">26,233 Icons</p>
        <p>Page 1 of 20</p>
      </div>
      <div className="grid md:grid-cols-6 lg:grid-cols-9 gap-3  mt-5 ">
        {data?.map((card,index) => (
          <RightDivCard key={index} card={card}></RightDivCard>
        ))}

        {filteredArray?.map((card) => (
          <RightDivCard key={card._id} card={card}></RightDivCard>
        ))}
      </div>
    </div>
  );
};

export default RightDiv;
