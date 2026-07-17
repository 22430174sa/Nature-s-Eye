
import './App.css';
import NavBar from './component/NavBar';

import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import SavedPhotos from './component/SavedPhotos';
import Login  from './pages/Login';
import Signup from './pages/Signup';
import Beaches from './pages/Destinations/Beaches';
import Mountains from'./pages/Destinations/Mountains';
import Islands from './pages/Destinations/Islands';
import Forests from './pages/Destinations/Forests';
import Oceans from './pages/Destinations/Oceans';
import Footer from './component/footer';




import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'; 
function App() {
  
  return (
      <div className="App">
      <Router>
        <NavBar /> 
        <Routes>
          
 <Route path ="/" excat Component={Home}/>
 <Route path ="/AboutUS" excat Component={AboutUs}/>
 <Route path ="/Contact" excat Component={Contact}/>
 <Route path="/SavedPhotos" excat Component={SavedPhotos}/>
  < Route path ="/Login" excat Component={Login}/>
  <Route path ="/SignUp" excat Component={Signup}/>
  <Route path="/destinations/forests" element={<Forests/>}/>
  <Route  path="/destinations/islands" element={<Islands/>}/>
  <Route path="/destinations/oceans" element={<Oceans/>}/>
  <Route path="/destinations/mountains" element={<Mountains/>}/>
   <Route path="/destinations/beaches" element={<Beaches />} />
 


        </Routes>
        <Footer />
        </Router>     
    </div>
  );
}

export default App;