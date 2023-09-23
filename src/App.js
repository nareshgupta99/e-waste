import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import Login from './component/login_signup/Login';
import Home from './component/home/Home';
import UserDashboard from './component/user_dashboard/UserDashboard';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/user-dashboard' element={<UserDashboard />}></Route> 
      
          
        </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
