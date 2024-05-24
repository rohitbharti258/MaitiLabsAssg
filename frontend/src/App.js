import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Extra from "./components/Extra";
import TopHeading from "./components/TopHeading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
      <TopHeading />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='willgetselect' element={<Extra/>}/>
          
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
