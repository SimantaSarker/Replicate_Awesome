import { useEffect, useState } from "react";
import Filtering from "./Components/Filtering";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main/Main";
import Search from "./Components/Search";

function App() {
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);
  const [condition, setCondition] = useState(true);
  const [cardOption, setCardOption] = useState("smallCard");

  useEffect(() => {
    fetch("Icons.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  const cardShape = (option) => {
    setCardOption(option);
  };

  const filterOption = (option) => {
    setValue(option);
    setCondition(false);
  };
  const filteredArray = data?.filter((item) => item?.category === value);

  return (
    <div>
      <Header></Header>
      <Search></Search>
      <Filtering filterOption={filterOption} cardShape={cardShape}></Filtering>
      {condition ? (
        <Main data={data} cardOption={cardOption} />
      ) : (
        <Main filteredArray={filteredArray} cardOption={cardOption} />
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
