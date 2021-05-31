import React,{useState,useContext} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import { HiLockClosed } from 'react-icons/hi';
import signupImg from '../images/signup.png';
import { IconContext } from "react-icons";
import { FaEnvelopeOpen,FaFacebookF,FaGooglePlusG,FaTwitter} from 'react-icons/fa';
import {UserContext} from '../App'

const Signin = () => {

    const {state, dispatch} = useContext(UserContext);
    const history = useHistory();

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

    //  post login data to server
    const loginUser = async(e)=>{
       e.preventDefault();
       const res = await fetch('/signin',{
           method:'POST',
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({
             email,
             password
           })
       });
     const data = res.json();
     console.log(data);
     if(res.status === 422 || res.status === 400 || !data){
         window.alert("Invalid Login!!");
     }else{
         dispatch({type:"USER", payload:true})
         window.alert("You are Logged in.");
         history.push('/')
     }
    }
    return (
        <div>
            <div className="sectionRegistration">
            <div className="container h-100">
                <div className="col-md-10 col-lg-10 col-12 mx-auto h-100">
                    <div className="form-wrapper">
                        <div className="row w-100 flex-row-reverse">
                            <div className="col-md-6 col-lg-6 col-6">
                            <form method='POST'>
                                <h2 className="font-weight-bold">Sign In</h2>
                                
                                <div className="input-container">
                                    <FaEnvelopeOpen size="12px"/>
                                    <input className="input-field" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="email"/>
                                </div>
                                
                                <div className="input-container">
                                    <HiLockClosed size="12px"/>
                                    <input className="input-field" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="password"/>
                                </div>

                                <button  type="submit" className="btn" name="signup" onClick={loginUser}>Login</button>
                                </form>
                                <div className="social-icon-box">
                                    <p>Or Login with</p>
                                    <ul>
                                    <IconContext.Provider value={{ color: "#FFF", className: "global-class-name" }}>
                                        <li><NavLink to=""><FaFacebookF/></NavLink></li>
                                        <li><NavLink to=""><FaGooglePlusG/></NavLink></li>
                                        <li><NavLink to=""><FaTwitter/></NavLink></li>
                                    </IconContext.Provider>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-6 text-center">
                                <div className="img-wrapper">
                                    <img className="img-fluid" src={signupImg} alt="img"/>
                                </div>
                                <NavLink to="/signup">I am not registerd registerd?</NavLink>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
        </div>
    )
}

export default Signin;
