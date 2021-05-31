import React from 'react';
import Header from  '../mini-components/Header';
import Singleinput from '../mini-components/Singleinput'
import Footer from  '../mini-components/Footer';

const Signin = () => {
    return (
        <div>
            <Header/>
            <div className="form-wrapper section-padding">
               <div className="container">
                   <div className="row">
                       <div className="col-md-8 col-lg-8 offset-md-2 offset-lg-2">
                         <h2 className="text-center">Signin</h2>
                         <form>
                               <div className="single-box-wrap mb-5">
                                <div className="form-row">
                                    <Singleinput 
                                        labelName={'Email'} 
                                        col={'col-md-12 col-lg-12 col-12 '} 
                                        type={'email'}
                                        placeholder={'Enter Email'}
                                        name={'presentAddHouseNo'}
                                    />
                                      <Singleinput 
                                        labelName={'Password'} 
                                        col={'col-md-12 col-lg-12 col-12 '} 
                                        type={'password'}
                                        placeholder={'Enter password'}
                                        name={'presentAddHouseNo'}
                                    />
                                  </div>
                               </div>
                            <div className="form-group text-right">
                             <button type="submit" className="primary-button mt-1 border-0">Sign in</button>
                            </div>
                            </form>
                       </div>
                   </div>
               </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Signin
