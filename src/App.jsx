import logo from './logo.svg';
import './App.css';
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import UserLayout from './pages/UserLayout';
import UserReged from './pages/UserReged';
import UserUnreg from './pages/UserUnreg';
import UserProfile from './pages/UserProfile';
import UserHistory from './pages/UserHistory';
import UserChangePassword from './pages/UserChangePassword';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />                
                <Route path="user" element={<UserLayout />}>
                    <Route index element={<UserUnreg />} />
                    <Route path="reged" element={<UserReged />} />
                    <Route path="unreg" element={<UserUnreg />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="history" element={<UserHistory />} />
                    <Route path="changepassword" element={<UserChangePassword />} />
                </Route>              
            </Routes>
        </BrowserRouter>

  );
}
export default App;
