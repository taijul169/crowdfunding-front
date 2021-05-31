import React from 'react';
import { NavLink } from 'react-router-dom';
import ProImg from '../../images/profile-img.jpg';
import Car from '../../images/project/car.jpg';
import Chemical from '../../images/project/chemical.jpg';
import Food from '../../images/project/food.jpg';
import Apparel from '../../images/project/apparel.jpg';
import Singleproject from '../mini-components/Singleproject'

const Userprofile = () => {
    return (
        <div className="userprofileWrap section-padding">
          <div className="container">
              <h2 className="heading">Profile Info</h2>
              <div className="row p-3 custom-bg">
                  <div className="col-md-8 col-lg-8 col-12 col-sm-6 order-2 order-lg-1 order-md-1">
                      <div className="infoBox-wrap">
                         <table className="table">
                             <tr><th>Name</th><td>Tariq Khan</td></tr>
                             <tr><th>Profession</th><td>Engineer</td></tr>
                             <tr><th>Address</th><td>Sheltech Chayaneer</td></tr>
                             <tr><th></th><td>148 Green Road,Dhaka</td></tr>
                             <tr><th>Contact No</th><td>01713015774</td></tr>
                             <tr><th>Email</th><td>tariq@gmail.com</td></tr>
                             <tr><th>Total Invest</th><td>500,000</td></tr>
                            
                         </table>
                      </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-12 col-sm-6 order-lg-0 order-md-2 order-lg-2">
                      <div className="infoBox-right">
                        <h2 className="my-2">ID: CC06210010001</h2>
                        <div className="proImg-wrap">
                            <img src={ProImg} alt="proimg" className="img-fluid" />
                        </div>
                        <h4>Md.Tariqul Islam</h4>

                      </div>
                  </div>
              </div>
              <div className="row mt-5">
                  <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                    <Singleproject img={Car} title={'001-ABC  Apparels'} details={'Some quick example text to build on the card title and make up the bulk of the cards content.'}/>
                  </div>
                  <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                    <Singleproject img={Chemical} title={'002-DEF  Chemicals'} details={'Some quick example text to build on the card title and make up the bulk of the cards content.'}/>
                  </div>
                  <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                    <Singleproject img={Food} title={'003-GHI  Foods'} details={'Some quick example text to build on the card title and make up the bulk of the cards content.'}/>
                  </div>
                  <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                    <Singleproject img={Apparel} title={'001-ABC  Apparels'} details={'Some quick example text to build on the card title and make up the bulk of the cards content.'}/>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Userprofile
