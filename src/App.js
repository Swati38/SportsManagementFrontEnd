import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import AppHeader from './components/AppHeader';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Booking from './components/Booking';
import CityBasedAcademy from './components/CityBasedAcademy';
import Academy from './components/Academy';
import Login from './components/Login';
import FrontPage from './components/FrontPage'
import PlayerRegisteration from './components/PlayerRegisteraion';
import AcademyOwnerRegisteration from './components/AcademyOwnerRegisteration';
import AboutUs from './components/AboutUs'
import AcademyRegisteration from './components/AcademyRegisteration' 
import Review from './components/Review'
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<FrontPage/>}></Route>
    <Route path="booking" element={<Booking/>}></Route>
    <Route path="findByCity" element={<CityBasedAcademy/>}></Route>
    <Route path="academy" element={<Academy/>}></Route>
    <Route path="login" element={<Login/>}></Route>
    <Route path="player" element={<PlayerRegisteration/>}></Route>
    <Route path="owner" element={<AcademyOwnerRegisteration/>}></Route>
    <Route path='aboutUs' element={<AboutUs/>}></Route>
    <Route path="academyRegister" element={<AcademyRegisteration/>}></Route>
    <Route path="review" element={<Review/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
    
  );
}

export default App;
