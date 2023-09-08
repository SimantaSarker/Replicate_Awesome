import Filtering from "./Components/FilteringSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main/Main";
import Search from "./Components/Search";

function App() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <Filtering></Filtering>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
