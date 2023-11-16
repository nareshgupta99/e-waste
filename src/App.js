import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import Login from './component/login_signup/Login';
import Home from './component/home/Home';

import { ToastContainer } from 'react-toastify';
import VisitorLogin from './component/login_signup/VisitorLogin';
import RegistrationForm from './component/recycler-dashboard/RegistrationForm';
import DashboardUser from './component/user_dashboard/DashboardUser';
import Map from './component/location/map';
import DeviceForm from './component/user_dashboard/DeviceForm';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/visitor-login' element={<VisitorLogin />}/>
          <Route path='/recycler-form' element={<RegistrationForm />}/>
          <Route path='/user-dashboard' element={<DashboardUser />} />
          <Route path='/location' element= {  <Map />}/>
          <Route path='/recycler/login' element={<Login />} />
          <Route path="/register-device" element={<DeviceForm />} />

        </Routes>
    
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
