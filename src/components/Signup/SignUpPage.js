 import React, { useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
 import {auth} from "../firebase.js";
 import {Link} from "react-router-dom";
 //import Logo from "../images/logo.png";
 import { useNavigate } from "react-router-dom";
  import { useDispatch } from 'react-redux'
 import { isValidUser, userName } from '../../reduxTool/validSlice.js'
 import './Signuppage.css';
 import {db} from '../firebase.js';
 import { collection, addDoc } from "firebase/firestore";
function SignUpPage () {
    const[emailSign, setEmail]=useState("");
    const[passwordSign, setPassword]=useState(""); 
    const[error, setError]=useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const [disName, setdisName]=useState("");
    function nameHandler(e){
        setdisName(e.target.value);
    }
    function emailSignHandler(e){
        setEmail(e.target.value);
    }
    function passwordSignHandler(e){
        setPassword(e.target.value);
    }
    function SignUpHandler(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailSign, passwordSign)
        .then((userCredential) => {
          const user = userCredential.user;
          setError(false);

          dispatch(userName(disName));
          dispatch(isValidUser()); 
          //console.log("go to landing page");
          localStorage.setItem("isLoggedIn", "false");
          localStorage.setItem("userName", disName);
          navigate("/");
          uploadData();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(true);
          

        });
    }

    async function uploadData(){
        await addDoc(collection(db, "clients"),{
          email:emailSign,
          userName:disName,
         
        });
        
        }
    return (
      <div className="signupbox">
            <div className='main'>
              <h1>Sign up to Snapdeal</h1>
             {error && <p className="errorMsg">"Your account is already registered , Click on login"</p>}
            <form onSubmit={SignUpHandler}>
             
            <input className="input" value={disName} onChange={nameHandler} type="text" placeholder="enter your name" />
            <input className="input" value={emailSign} onChange={emailSignHandler} type="text"  placeholder="enter email" />
            <input className="input" value={passwordSign} onChange={passwordSignHandler} type="password" placeholder="password length > 6" />
            <button className="button" type="submit">Sign Up</button>
            <div className="haveAcc">
            <p>Already have an account?</p>
            <Link to='/login' >Login</Link>
            </div>
        </form>
        </div>
        </div>
    )
    }
export default SignUpPage;