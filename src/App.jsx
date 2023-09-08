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

  useEffect(() => {
    fetch("Icons.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  const filterOption = (option) => {
    setValue(option);
    setCondition(false);
  };
  const filteredArray = data?.filter((item) => item?.category === value);

  return (
    <div>
      <Header></Header>
      <Search></Search>
      <Filtering filterOption={filterOption}></Filtering>
      {condition ? (
        <Main data={data} />
      ) : (
        <Main filteredArray={filteredArray} />
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
