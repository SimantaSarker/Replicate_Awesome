import { useEffect, useState } from "react";
import RightDivCard from "./RightDivCard";

const RightDiv = () => {
  const [data, setAllData] = useState([]);
  useEffect(() => {
    fetch("Icons.json")
      .then((res) => res.json())
      .then((value) => setAllData(value));
  }, []);
  console.log(data);
  return (
    <div className="font">
      <div className="flex justify-between">
        <p className="font-semibold text-xl">26,233 Icons</p>
        <p>Page 1 of 20</p>
      </div>
      <div className="grid   md:grid-cols-3 lg:grid-cols-6 gap-7 mt-5 ">
        {data.map((card) => (
           <RightDivCard key={card._id} card={card}></RightDivCard>
        ))}
      </div>
    </div>
  );
};

export default RightDiv;
