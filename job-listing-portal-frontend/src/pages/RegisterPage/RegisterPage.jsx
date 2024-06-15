import Register from '../../component/Register/Register'

import authBG from "../../assets/images/authBG.png";


const RegisterPage = () => {
  return (
 
    <div style={{ display: "flex", maxHeight: "100vh", maxWidth: "100vw" }}>
    <Register />
    <div style={{ display: "flex", flexDirection: "column" }}>
        <img
            src={authBG}
            style={{
                position: "absolute",
                maxHeight: "100vh",
                width: "50vw",
                zIndex: 0,
                
            }}
            alt="Register Cover"
        />  </div>  
        </div>
  );
}

export default RegisterPage;
