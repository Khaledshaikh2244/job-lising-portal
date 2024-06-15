import {Routes, Route , BrowserRouter} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <BrowserRouter>
   <Routes>
    <Route  path="/login" element = { <LoginPage /> } />
    <Route  path="/register" element = { <RegisterPage /> } />

   </Routes>
    </BrowserRouter>
  )
}

export default App
