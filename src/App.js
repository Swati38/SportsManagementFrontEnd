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
import PlayerRegisteration from './components/PlayerRegisteraion';
import AcademyOwnerRegisteration from './components/AcademyOwnerRegisteration';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AppHeader/>}></Route>
    <Route path="booking" element={<Booking/>}></Route>
    <Route path="findByCity" element={<CityBasedAcademy/>}></Route>
    <Route path="academy" element={<Academy/>}></Route>
    <Route path="login" element={<Login/>}></Route>
    <Route path="player" element={<PlayerRegisteration/>}></Route>
    <Route path="owner" element={<AcademyOwnerRegisteration/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
    
  );
}

export default App;
