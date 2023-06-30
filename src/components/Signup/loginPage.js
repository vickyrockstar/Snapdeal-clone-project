import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase.js";
import {Link} from "react-router-dom";
//import './loginPage.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { isValidUser, userName } from '../../reduxTool/validSlice.js' 
import { collection, addDoc } from "firebase/firestore";
import { useSelector } from 'react-redux'
import  { useEffect } from 'react';
import { query, onSnapshot } from "firebase/firestore";
import {db} from '../firebase.js';
import "./Signuppage.css"


function LoginPage () {
   /*  const[error, setError]=useState(false); */
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState(""); 
    const navigate = useNavigate();
     const dispatch = useDispatch(); 
     
     /* useEffect(()=>{ 
        const q = query(collection(db, "clients"));
        console.log(q);
        console.log("Hi")
        onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data().email);
            console.log(email)
            if(doc.data().email === email){
                console.log("true");
            console.log("karma",doc.data().email);
              dispatch(userName(doc.data().userName));
            }
          });    
        });   
      },[]); */
    function emailHandler(e){
        setEmail(e.target.value);
        // console.log("nayi",e.target.value)
    }
    function passwordHandler(e){
        setPassword(e.target.value);
    }
    
    function submitHandler(e){
        e.preventDefault();
        // console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        
        const user = userCredential.user;
        const q = query(collection(db, "clients"));
        onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if(doc.data().email === email){
              dispatch(userName(doc.data().userName));
              localStorage.setItem("isLoggedIn", "true");
              localStorage.setItem("userName", doc.data().userName);
              navigate("/");
            }
          });    
        });  
        
      
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log("llll",errorCode, errorMessage)
        /* setError(true); */
     });
        setEmail("");
        setPassword("");
    } 
    
 return (
    <div className='signupbox'>
      <div className="main">
        <h1>Login  to Snapdeal</h1>
        {/* {error && <p className="errorMsg">"Wrong Email and Password"</p> } */}
        <form onSubmit={submitHandler}>
            <input className="input" value={email} onChange={emailHandler} type="text"  placeholder="enter email" />
            <input className="input" value={password} onChange={passwordHandler} type="password" placeholder="enter password" />
            <button className="button" type="submit">Login</button>
        </form>
        <div className="haveAcc">
       <p>New User? click on </p>
       <Link to='/Signup'>Sign Up</Link>
       </div>
       </div>
    </div>
 )}


export default LoginPage;