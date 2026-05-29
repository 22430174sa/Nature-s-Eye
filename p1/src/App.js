
import './App.css';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Login  from './pages/Login';
import Signup from './pages/Signup';
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
  <Route path ="/Login" excat Component={Login}/>
  <Route path ="/SignUp" excat Component={Signup}/>
 


        </Routes>
        <Footer />
        </Router>     
    </div>
  );
}

export default App;