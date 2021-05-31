import React,{useState} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import { HiLockClosed } from 'react-icons/hi';
import signupImg from '../images/signup.png';
import { FaEnvelopeOpen,FaBlenderPhone,FaBriefcase,FaUserAlt} from 'react-icons/fa';


const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name:'',
        email:'',
        phone:'',
        work:'',
        password:'',
        cpassword:''
    });

    // get data from the input field
    let name,value;
    const handleInputs =(e)=>{
     name = e.target.name;
     value = e.target.value;
     setUser({...user,[name]:value})

    }
    // sending data to server
    const PostData = async(e)=>{
      e.preventDefault();
      const {name, email,phone,work,password,cpassword} = user;

     const res =  await fetch('/register',{
         method:"POST",
         headers:{
             "Content-Type":"application/json"
         },
         body:JSON.stringify({
            name, email,phone,work,password,cpassword 
         })

     });
    const data = res.json();
    if(res.status === 422 || !data){
        window.alert('Invalid Registration!!');
    }
    else{
        window.alert('Registration Successfull');
        history.push('/signin')
    }

    }

    return (
        <div className="sectionRegistration">
            <div className="container h-100">
                <div className="col-md-10 col-lg-10 col-12 mx-auto h-100">
                    <div className="form-wrapper">
                        <div className="row w-100">
                            <div className="col-md-6 col-lg-6 col-6">
                            <form method="POST">
                                <h2 className="font-weight-bold">Sign up</h2>
                                <div class="input-container">
                                   <FaUserAlt size="12px"/>
                                    <input className="input-field" type="text" value={user.name} onChange={handleInputs} placeholder="Your Name" name="name"/>
                                </div>

                                <div className="input-container">
                                    <FaEnvelopeOpen size="12px"/>
                                    <input className="input-field" type="email" value={user.email} onChange={handleInputs} placeholder="Email" name="email"/>
                                </div>
                                <div className="input-container">
                                    <FaBlenderPhone size="12px"/>
                                    <input className="input-field" type="text" value={user.phone} onChange={handleInputs} placeholder="Your Mobile No:" name="phone"/>
                                </div>
                                <div className="input-container">
                                    <FaBriefcase size="12px"/>
                                    <input className="input-field" type="text" value={user.work} onChange={handleInputs} placeholder="Your Profession:" name="work"/>
                                </div>

                                <div className="input-container">
                                    <HiLockClosed size="12px"/>
                                    <input className="input-field" type="password" value={user.password} onChange={handleInputs} placeholder="Password" name="password"/>
                                </div>
                                <div className="input-container">
                                    <HiLockClosed size="12px"/>
                                    <input className="input-field" type="password" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" name="cpassword"/>
                                </div>

                                <button type="submit" onClick={PostData} className="btn" name="signup">Register</button>
                                </form>
                            </div>
                            <div className="col-md-6 col-lg-6 col-6 text-center">
                                <div className="img-wrapper">
                                    <img className="img-fluid" src={signupImg} alt="img"/>
                                </div>
                                <NavLink to="/signin">I am alredy registerd?</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Signup
