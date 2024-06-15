import {useEffect, useState} from 'react'
import styles from "./Register.module.css"
import {toast , ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../../api/auth';

    // function throttle (fn , delay) {
    //   let lastCalltime = 0;
    //   return function(...args) {
    //     const now = Date.now();

    //     if(now - lastCalltime >= delay ) {
    //       fn(...args);
    //       lastCalltime = now;
    //     }
    //   }
    // }


    //toaster 
     
  
  function Register() {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      mobile: "",
    });


    // toaster Fucntionalty
    let toasterCount = 0;
    let cooldown = false;
    const showToast =  () => {

    if(cooldown) {
      return;
    }  
      toasterCount += 1;

      if(toasterCount <= 2 )  {
      toast.success("Regsitered", {autoClose : 2000});
      }

      else{

        toast.dismiss();
        toast.error("wait for few seconds !", {autoClose : 3000});
        toasterCount = 0;
        cooldown = true;

        //setting timeInterval for next toaster req 
          setTimeout( () => {
            cooldown = false;
          }, 3000);

      }
    }
    // toaster Fucntionalty  end


      const  [isFormChecked , setIsFormChecked] = useState(false);

        // const handleChange = throttle((event) => {
        //   setFormData({...formData,[event.target.name]: event.target.value});
        //     // event.preventDefault();
        // } ,3000) 
    
        const handleChange = (event) => 
      {setFormData({...formData, [event.target.name]: event.target.value})};
      
    
      useEffect(() => {console.log(formData) ;
                      {console.log(isFormChecked);

                      }
      },[isFormChecked , formData]);
      
      // console.log(formData);
      const handleSubmit = async (event) => {
       if(
        !formData.email || 
        !formData.password ||
        !formData.mobile ||
        !formData.password 
       )  {toast.error("fields cant be empty")
      return;
      
     }
     console.log(event);

       if(!isFormChecked) {
        toast.error('please accepts T&C');
        return;
      }
      if(isFormChecked){
        toast.success("Registered user SuccessFully ")
      }


      //register API call
      await registerUser(formData)

      };

      return (

      <div className={styles.container}>
        <h1 className={styles.h1}>Create an account</h1>
        <h2 className={styles.h2}>Your personal job finder is here</h2>
        <input
          className={styles.input}
          name="name"
          onChange={handleChange}
          type={"text"}
          placeholder="Name"
        ></input>
      <input
        className={styles.input}
        name="email"
        onChange={handleChange}
        type={"email"}
        placeholder="Email"
      ></input>
      <input
        className={styles.input}
        name="mobile"
        onChange={handleChange}
        type={"tel"}
        placeholder="Mobile"
      ></input>
      <input
        className={styles.input}
        name="password"
        onChange={handleChange}
        type={"password"}
        placeholder="Password"
      ></input>

      <span>
        <input
          className={styles.grey}
          type="checkbox"
          onChange={(event) => setIsFormChecked(event.target.checked)}
          name="checkbox"
          id="check1" />
        <label
          className={styles.grey}
          style={{ fontSize: "12px" }}
          htmlFor="check1"
        >
          By creating an account, I agree to our terms of use and
          privacy policy
        </label>
      </span>
      <button onClick={handleSubmit} className={styles.button}>
        Create Account
      </button>
      <p className={styles.footer}>
        <span className={styles.grey}>Already have an account?</span>
        <span
          className={styles.underline}
        >
          Sign in
        </span>
      </p>

      <button onClick={showToast} className={styles.button} >Show Toast !</button>
        <ToastContainer limit={2}> </ToastContainer>
        
    </div>

    
    
  );
}

export default Register
