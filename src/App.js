import AddProductPage from './AddProducts/add';
import Details from './Details';
import Login from './Login';
import MainPage from './Mainpage/page';


import { BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";




function App() {
  return (
    
      
      <Router>
      <Routes>  
      <Route path='/Details/:viewId' element={<Details/>}/>

        <Route path='/Login' element={<Login/>}/>
        <Route path="/MainPage" element={<MainPage/>}/>
        <Route path="/AddProducts" element={<AddProductPage/>}/>

        <Route path="*"  element={<Navigate to="/Login"/>}/>

        
      </Routes>
      
      </Router>

      
    
  );
}

export default App;
