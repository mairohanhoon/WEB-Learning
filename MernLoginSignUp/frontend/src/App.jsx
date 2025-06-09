import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

//pages
import LoginPage from "./pages/Login.page.jsx";
import SignUpPage from "./pages/SignUp.page.jsx";
import HomePage from "./pages/Home.page.jsx";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : navigate("/login");
  };
  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsAuthenticated(true);
      if(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup'){
        navigate('/home', {replace: false})
      }
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
      </Routes>
    </div>
  );
}

export default App;
