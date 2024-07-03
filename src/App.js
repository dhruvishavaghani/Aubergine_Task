import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
