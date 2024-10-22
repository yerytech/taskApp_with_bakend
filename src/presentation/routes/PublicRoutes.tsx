import { LoginPage } from "@auth//loginpage/LoginPage";
import { RegisterPage } from "@auth//register_page/RegisterPage";
import { Navigate, Route, Routes} from "react-router-dom"


export  const PublicRoutes = () => {
    return (
  
        <Routes>
          <Route
            path="login"
            element={<LoginPage />}
          />
          <Route
            path="register"
            element={<RegisterPage />}
          />
          <Route
            path="/*"
            element={<Navigate to='/login'/>}
          />
        </Routes>
    
    );
}