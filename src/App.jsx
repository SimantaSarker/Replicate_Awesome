import { useEffect, useState } from "react";
import Filtering from "./Components/Filtering";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main/Main";
import Search from "./Components/Search";

function App() {
  const [data, setData] = useState([]);
  const [condition, setCondition] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    fetch("Icons.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });



  const filterOption = (option) => {
    // Toggle the selected category in the array
    setCondition(false);
  
    if (appliedJobs.includes(option)) {
      // If category is already selected, remove it
      setAppliedJobs(appliedJobs.filter((job) => job !== option));
    } else {
      // If category is not selected, add it
      setAppliedJobs([...appliedJobs, option]);
      
    }
  };
 

  const filteredObjects = data.filter(obj => appliedJobs.includes(obj.category));
 

  return (
    <div>
      <Header></Header>
      <Search></Search>
      <Filtering filterOption={filterOption}></Filtering>
      {condition ? (
        <Main data={data} />
      ) : (
        <Main  filteredObjects={filteredObjects} />
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
