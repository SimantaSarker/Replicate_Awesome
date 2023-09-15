import { useEffect, useState } from "react";
import Filtering from "./Components/Filtering";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main/Main";
import Search from "./Components/Search";

function App() {
  const [data, setData] = useState([]);
  // const [condition, setCondition] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [style,setStyle]=useState([]);

  useEffect(() => {
    fetch("Icons.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  const styleFilterOption = (option) => {
    if (style.includes(option)) {
      setStyle(style.filter((job) => job !== option));
    } else {
      setStyle([...style, option]);
    }
  
  };




  const filterOption = (option) => {

    if (appliedJobs.includes(option)) {
      // If category is already selected, remove it
      setAppliedJobs(appliedJobs.filter((job) => job !== option));
    } else {
      // If category is not selected, add it
      setAppliedJobs([...appliedJobs, option]);
    }
  };
  
  const filteredObjects = data?.filter((obj) =>
  appliedJobs.includes(obj.category)
  );
  
  const styleFiltered = filteredObjects.filter((obj) =>
    style.includes(obj.style)
    // console.log(obj.style)
  );






  

  return (
    <div>
      <Header></Header>
      <Search></Search>
      <Filtering filterOption={filterOption}></Filtering>
      {filteredObjects.length == 0 ? (
        <Main data={data} styleFilterOption={styleFilterOption} />
      ) : (
        <Main
          filteredObjects={filteredObjects}
          styleFilterOption={styleFilterOption}
        />
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
