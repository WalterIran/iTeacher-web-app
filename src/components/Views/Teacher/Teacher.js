import './Teacher.css'
import { BaseButton, PrimaryButton, SecondaryButton } from '../../UI/Form/Button/Button';
import { PrimaryInput, SecondaryInput } from '../../UI/Form/Input/Input';
import { Icon } from '@iconify/react';
import React, {useRef, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from '../../../api/axios';
import { useNavigate } from "react-router-dom";




const Teacher = () => {
    
    const hiddenFileInput = useRef(null);    
    const [fileUrl, setFileUrl] = useState("https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png");
    const [image, setImage] = useState(null);
    const [institutions, setInstitutions] = useState([]);
    const [institutionsTxt, setInstitutionsTxt] = useState('');
    const [platforms, setPlatforms] = useState([]);
    const [platformsTxt, setPlatformsTxt] = useState('');
    
    let navigate = useNavigate(); 
    
    let imageHandle=(event)=>{
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl);
        setImage(imageFile);
    }

    const addToArr = (setArr, setTxt, txt) => {
        setArr(prev => [...prev, txt]);
        setTxt('');
    }

    const deleteFromArr = (arr, setArr, deleteItem) => {
        const tmp = arr.filter((value) => {
            return value !== deleteItem
        });
        setArr(tmp);
    }

    const validation = Yup.object({
        name: Yup.string()
            .min(3,"Minimum 3 characters")
            .max(15, 'Must be 15 characters or less')
            .required("Name Requiered"),
        surname: Yup.string()
            .min(3,"Minimum 3 characters")
            .max(15, 'Must be 15 characters or less')
            .required("surname Requiered"),
        email: Yup.string()
            .email("Invalid Email")
            .required("Email Requiered"),
        password:Yup.string()
            .min(8,"Password must be 8 character minimum")
            .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/,
                "Must Contain 8 characters, 1 uppercase, 1 lowercase, 1 number")
            .required("Password Requiered"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'),null],"Passwords must match"),
        degreeName: Yup.string()
            .max(20, "degreeName must be less than 20 characters"),
        teacherType: Yup.string()
            .max(20, "teacherType field must be less than 20 characters"),
        aboutDescription: Yup.string()
            .max(40, "40 characters max is permitted")
      });
    
      const initial ={
        name: '',
        surname:'',
        email:'',
        password: '',
        confirmPassword: '',
        degreeName:'',
        teacherType:'',
        aboutDescription:''
    }

    const formik = useFormik({
        initialValues: initial,
        validationSchema: validation,
        onSubmit: async (formValues) => {
          try{
            const formData = new FormData();

            const keys = Object.keys(formValues).filter(key => formValues[key] !== '');
                
            keys.forEach(key => {
                formData.append(key, formValues[key].toString());
            });

            formData.append('platforms', JSON.stringify(platforms));
            formData.append('institutions', JSON.stringify(institutions));

            formData.append('profileImg',image);
        
            const data = await axios.post(
                '/auth/teacher-signup',
                formData,
                {
                    headers: {
                        Accept: 'aplication/json',
                        'Content-Type': 'multipart/form-data'
                    },
                    transformRequest: (data, headers) => {
                        return formData;
                    }
                }
            );
        
            navigate('/login');
        }catch(ex){
            console.log('Error on Signin submit',ex)
        }
        },
      });
      
    const styleInput={
        width: '30vw',
    }
    return (
    <div className='box'>
        <div className='box_degreeName'>
            <h2>Teacher Registration</h2>
        </div>
        <form className="teacher_registration_form">
            <div className="box_name">
                <div className='teachers_name'>
                    <PrimaryInput
                        label="First name"
                        type="text"
                        info=""
                        error={formik.errors.name}
                        name = "name"
                        value = {formik.values.name}
                        onChange = {formik.handleChange}
                    />
                    <PrimaryInput
                        label="Last name"
                        type="text"
                        info=""
                        error={formik.errors.surname}
                        name = "surname"
                        value = {formik.values.surname}
                        onChange = {formik.handleChange}
                    />
                </div>
                <div className='box_image'>
                    <div className='teacher_image'>
                        <img src={fileUrl}  name="image" />
                    </div>
                    <label className='button_base button_secondary' htmlFor="Selectedinput">
                        <p>Add Image</p>
                    </label>
                    <input type="file" id ="Selectedinput" name='Selectedinput' ref={hiddenFileInput} accept="image/*" onChange={imageHandle} />
                </div>
            </div>
            <div className='box_logindata'>
                <SecondaryInput
                    label="Email"
                    type="text"
                    info=""
                    error={formik.errors.email}
                    name = "email"
                    value = {formik.values.email}
                    onChange = {formik.handleChange}
                />
                <div className='pass'>
                    <SecondaryInput
                        label="Password"
                        type="password"
                        info=""
                        style={styleInput}
                        error={formik.errors.password}
                        name = "password"
                        value = {formik.values.password}
                        onChange = {formik.handleChange}
                    />

                    <SecondaryInput
                        label="Confirm Pass"
                        type="password"
                        info=""
                        error={formik.errors.confirmPassword}
                        name = "confirmPassword"
                        value = {formik.values.confirmPassword}
                        onChange = {formik.handleChange}
                        style={styleInput}
                    />
                </div>
                

            </div>

            <div className='box_title'>
                    <div className='title_expertise'>
                        <div>
                            <PrimaryInput
                                label="Title"
                                type="text"
                                info=""
                                error={formik.errors.degreeName}
                                name = "degreeName"
                                value = {formik.values.degreeName}
                                onChange = {formik.handleChange}
                                
                            />
                        </div>
                        <div>
                            <PrimaryInput
                                label="Expertise"
                                type="text"
                                info=""
                                error={formik.errors.teacherType}
                                name = "teacherType"
                                value = {formik.values.teacherType}
                                onChange = {formik.handleChange}
                            />
                        </div>
                    </div>
                <SecondaryInput
                    label="About"
                    type="text"
                    info=""
                    error={formik.errors.aboutDescription}
                    name="aboutDescription"
                    value={formik.values.aboutDescription}
                    onChange={formik.handleChange}
                />
            </div>
            <div className='box_institution'>
                <div className='instituion_holder'>
                    <label>Institutions</label>
                    <div className='institutions'>
                        <div className='instInput'>
                            <PrimaryInput
                                    type="text"
                                    info=""
                                    error={formik.errors.institutions}
                                    name={`institution`}
                                    value={institutionsTxt}
                                    onChange={(e) => setInstitutionsTxt(e.target.value)}
                                    style={styleInput}
                                />
                        </div>
                        <div className='instButton'>
                            <BaseButton 
                                type="button" 
                                style={{backgroundColor: "blue", fontWeight: 'bold'}}
                                onClick={() => addToArr(setInstitutions, setInstitutionsTxt, institutionsTxt)}
                            >
                                <Icon icon="carbon:add-filled" />
                                ADD
                            </BaseButton>
                        </div>
                    </div>
                    {
                        institutions.map((item, index) => {
                            return(
                                <div key={index} className="institutions">
                                    <p className='instInput'>{item}</p>
                                    <BaseButton type="button" style={{backgroundColor: "gray", fontWeight: 'bold'}} onClick={() => deleteFromArr(institutions,setInstitutions,item)} >
                                        <Icon icon="fa6-solid:trash-can" />
                                            DEL
                                    </BaseButton>
                                </div>
                            );
                        })
                    }
                </div>

                <div className='platform_holder'>
                    <label>Plataforms</label>
                    <div className='plataforms'>
                        <div className='platInput'>
                            <PrimaryInput             
                                    type="text"
                                    info=""
                                    error={formik.errors.plataforms}
                                    name={`plataforms`}
                                    value={platformsTxt}
                                    onChange = {(e) => setPlatformsTxt(e.target.value)}
                                    style={styleInput}
                                />
                        </div>
                        <div className='platButton'>
                            <BaseButton 
                                type="button" 
                                style={{backgroundColor: "blue", fontWeight: 'bold'}}
                                onClick={() => addToArr(setPlatforms, setPlatformsTxt, platformsTxt)}
                            >
                                <Icon icon="carbon:add-filled" />
                                ADD
                            </BaseButton>
                        </div>
                    </div>
                    {
                        platforms.map((item, index) => {
                            return(
                                <div key={index} className="institutions">
                                    <p className='instInput'>{item}</p>
                                    <BaseButton type="button" style={{backgroundColor: "gray", fontWeight: 'bold'}} onClick={() => deleteFromArr(platforms, setPlatforms, item)} >
                                        <Icon icon="fa6-solid:trash-can" />
                                        DEL
                                    </BaseButton>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className='box_buttons'>
                <div className='button'>
                    <PrimaryButton type='button' onClick={formik.handleSubmit}>
                        ACCEPT
                    </PrimaryButton>
                </div>
                <div>
                    <SecondaryButton>
                        CANCEL
                    </SecondaryButton>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Teacher;


