import React,{useState} from 'react';
import Singleinput from '../mini-components/Singleinput';


const Form = () => {
    var display1 = '';
    var display2 = '';
    const [state, setstate] = useState(null)
    const [stateSecond, setstateSecond] = useState(null)
    const  imageHandler = (e)=>{
        
       const reader = new FileReader();
       reader.onload = ()=>{
        
           if(reader.readyState === 2){
               setstate(reader.result);
              
           }
           display1='d-block';

       }
       reader.readAsDataURL(e.target.files[0])

   }
   const imageHandlerNidBack =(e)=>{
    const reader = new FileReader();
    reader.onload = ()=>{
        if(reader.readyState === 2){
            setstateSecond(reader.result);
        }
    }
    reader.readAsDataURL(e.target.files[0])

   }

    return (
        <div>
            <div className="form-wrapper section-padding">
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-lg-12">
                         <h2 className="text-center">Create Account</h2>
                         <form>
                            <div className="single-box-wrap mb-5">
                                <h4 className="formheading">Personal Information</h4>
                                <div className="form-row">
                                    <Singleinput 
                                        labelName={'ReferenceID'} 
                                        col={'col-md-12 col-lg-12 col-12 '} 
                                        type={'text'}
                                        placeholder={'Enter your ref Id'}
                                        name={'refId'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'First Name'} 
                                        col={'col-md-6 col-lg-6 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter your first name'}
                                        name={'firstName'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Last Name'} 
                                        col={'col-md-6 col-lg-6 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter your last name'}
                                        name={'lastName'}
                                    />
                                    <Singleinput 
                                        labelName={'Phone-1'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        placeholder={'Enter Mobile no'}
                                        name={'perPhoneOne'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Phone-2'} 
                                        col={'col-md-6 col-lg-6 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter mobile no'}
                                        name={'perPhoneOTwo'}
                                    />
                                    <Singleinput 
                                        labelName={'Phone-3'} 
                                        col={'col-md-6 col-lg-6 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter mobile no'}
                                        name={'perPhoneOThree'}
                                    />
                                    <Singleinput 
                                        labelName={'Date of Birth'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'date'}
                                        name={'dateOfBirth'}
                                        mandetory={'mandetory'}
                                    />
                                   
                                     <div className={`form-group col-md-6 col-lg-6 col-12 `}>
                                        <label for="refId"className="mandetory">NID Front</label>
                                        <input type="file" className="form-control" id="inputEmail4" placeholder="" name="NIDfront" accept="image/*" onChange={imageHandler}/>
                                        <div className={`image-upload-box w-50 ${display1}` } style={{backgroundImage:`url(${state})`,backgroundSize:'cover',backgroundPosition:"center"}}></div>
                                     </div>
                                     <div className={`form-group col-md-6 col-lg-6 col-12 `}>
                                        <label for="refId"className="mandetory">NID Back</label>
                                        <input type="file" className="form-control" id="inputEmail4" placeholder="" name="NIDfront" accept="image/*" onChange={imageHandlerNidBack}/>
                                        <div className={`image-upload-box w-50 ${display2}` } style={{backgroundImage:`url(${stateSecond})`,backgroundSize:'cover',backgroundPosition:"center"}}></div>
                                     </div>
                                </div>
                            </div>
                            <div className="single-box-wrap mb-5">
                                <h4 className="formheading">Present Address</h4>
                                <div className="form-row">
                                
                                    <Singleinput 
                                        labelName={'House Number'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        placeholder={'Enter House Number'}
                                        name={'presentAddHouseNo'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'House Name'} 
                                        col={'col-md-4 col-lg-4 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter House Name'}
                                        name={'presentAddHouseName'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Lane Number'} 
                                        col={'col-md-4 col-lg-4 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter Lane Number'}
                                        name={'presentLaneNumber'}
                                    />
                                    <Singleinput 
                                        labelName={'Lane Name'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        placeholder={'Enter Lane Name'}
                                        name={'presentAddLaneName'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Road Number'} 
                                        col={'col-md-6 col-lg-6 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter Road Number'}
                                        name={'presentAddRoadNo'}
                                    />
                                    <Singleinput 
                                        labelName={'Road Name'} 
                                        col={'col-md-6 col-lg-6 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter Road Name'}
                                        name={'presentAddRoadName'}
                                    />
                                    <Singleinput 
                                        labelName={'Police Station'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        name={'presentAddPoliceStn'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Village'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        name={'presentAddVillage'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Upozella'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        name={'presentAddUpozella'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Post Code'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        name={'presentAddPostCode'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'District'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        name={'presentAddDistrict'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Nearest Landmark'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        name={'presentAddNearestLandmark'}
                                        mandetory={'mandetory'}
                                    />

                                  </div>
                               </div>
                               <div className="single-box-wrap mb-5">
                                <h4 className="formheading">Permanent Address</h4>
                                <div className="form-row">
                                
                                    <Singleinput 
                                        labelName={'House Number'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        placeholder={'Enter House Number'}
                                        name={'presentAddHouseNo'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'House Name'} 
                                        col={'col-md-4 col-lg-4 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter House Name'}
                                        name={'presentAddHouseName'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Lane Number'} 
                                        col={'col-md-4 col-lg-4 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter Lane Number'}
                                        name={'presentLaneNumber'}
                                    />
                                    <Singleinput 
                                        labelName={'Lane Name'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        placeholder={'Enter Lane Name'}
                                        name={'presentAddLaneName'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Road Number'} 
                                        col={'col-md-6 col-lg-6 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter Road Number'}
                                        name={'presentAddRoadNo'}
                                    />
                                    <Singleinput 
                                        labelName={'Road Name'} 
                                        col={'col-md-6 col-lg-6 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter Road Name'}
                                        name={'presentAddRoadName'}
                                    />
                                    <Singleinput 
                                        labelName={'Police Station'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        name={'presentAddPoliceStn'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Village'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        name={'presentAddVillage'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Upozella'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        name={'presentAddUpozella'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Post Code'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        name={'presentAddPostCode'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'District'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        name={'presentAddDistrict'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Nearest Landmark'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        name={'presentAddNearestLandmark'}
                                        mandetory={'mandetory'}
                                    />

                                  </div>
                               </div>
                               <div className="single-box-wrap mb-5">
                                <h4 className="formheading">Profession Details</h4>
                                <div className="form-row">
                                
                                    <Singleinput 
                                        labelName={'House Number'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        placeholder={'Enter House Number'}
                                        name={'presentAddHouseNo'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'House Name'} 
                                        col={'col-md-4 col-lg-4 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter House Name'}
                                        name={'presentAddHouseName'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Lane Number'} 
                                        col={'col-md-4 col-lg-4 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter Lane Number'}
                                        name={'presentLaneNumber'}
                                    />
                                    <Singleinput 
                                        labelName={'Lane Name'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        placeholder={'Enter Lane Name'}
                                        name={'presentAddLaneName'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Road Number'} 
                                        col={'col-md-6 col-lg-6 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter Road Number'}
                                        name={'presentAddRoadNo'}
                                    />
                                    <Singleinput 
                                        labelName={'Road Name'} 
                                        col={'col-md-6 col-lg-6 col-12'} 
                                        type={'text'}
                                        placeholder={'Enter Road Name'}
                                        name={'presentAddRoadName'}
                                    />
                                    <Singleinput 
                                        labelName={'Police Station'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        name={'presentAddPoliceStn'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Village'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        name={'presentAddVillage'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Upozella'} 
                                        col={'col-md-6 col-lg-6 col-12 '} 
                                        type={'text'}
                                        name={'presentAddUpozella'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Post Code'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        name={'presentAddPostCode'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'District'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        name={'presentAddDistrict'}
                                        mandetory={'mandetory'}
                                    />
                                    <Singleinput 
                                        labelName={'Nearest Landmark'} 
                                        col={'col-md-4 col-lg-4 col-12 '} 
                                        type={'text'}
                                        name={'presentAddNearestLandmark'}
                                        mandetory={'mandetory'}
                                    />

                                  </div>
                               </div>
                            
                           
                            
                            
                            <div className="form-group text-right">
                             <button type="submit" className="primary-button mt-3 border-0">Sign Up</button>
                            </div>
                            </form>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Form
