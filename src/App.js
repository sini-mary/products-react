import Login from './Login';
import MainPage from './Mainpage/page';


import Navbar from './Navigation ';
import { BrowserRouter,Routes,Route } from "react-router-dom";




function App() {
  return (
    <div >
      
      <Navbar/>
      

      <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Mainpage" element={<MainPage />}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
