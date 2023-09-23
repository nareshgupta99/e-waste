import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import Login from './component/login_signup/Login';
import Home from './component/home/Home';
import UserDashboard from './component/user_dashboard/UserDashboard';
import Location from './component/location/Location';
import { GoogleMap} from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/user-dashboard' element={<UserDashboard />}></Route> 
          <Route path='/location' element={<Location/>}></Route> 
          
        </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
