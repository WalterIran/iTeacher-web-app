import './Teacher.css'
import { BaseButton, PrimaryButton, SecondaryButton } from '../../UI/Form/Button/Button';
import { PrimaryInput, SecondaryInput } from '../../UI/Form/Input/Input';
import { Icon } from '@iconify/react';
import React, {useRef, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {publicAxios} from '../../../Lib/apiClient';
import axios from 'axios';




const Teacher = () => {
    
    const hiddenFileInput = useRef(null);    
    const [fileUrl, setFileUrl] = useState(["https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"]);
    let formData = new FormData();
    
    let imageHandle=(event)=>{
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl);
        //console.log(imageFile);

        if(event.target && imageFile){
            formData.append('teacherimage',imageFile);
        }
    }

    const upLoadButton =()=>{
        hiddenFileInput.current.click();
        axios.post(
            "https://v2.convertapi.com/upload",
            {formData})
        .then(res =>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handleServiceAdd = ()=>{
        initial.institutions=[...PrimaryInput]
    }
    const validation = Yup.object({
        firstname: Yup.string()
            .min(3,"Minimum 3 characters")
            .max(15, 'Must be 15 characters or less')
            .required("Name Requiered"),
        lastname: Yup.string()
            .min(3,"Minimum 3 characters")
            .max(15, 'Must be 15 characters or less')
            .required("Lastname Requiered"),
        email: Yup.string()
            .email("Invalid Email")
            .required("Email Requiered"),
        password:Yup.string()
            .min(8,"Password must be 8 character minimum")
            .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/,
                "Must Contain 8 characters, 1 uppercase, 1 lowercase, 1 number")
            .required("Password Requiered"),
        confirmpass: Yup.string()
            .oneOf([Yup.ref('password'),null],"Passwords must match"),
        title: Yup.string()
            .max(20, "Title must be less than 20 characters"),
        expertise: Yup.string()
            .max(20, "Expertise field must be less than 20 characters"),
        description: Yup.string()
            .max(40, "40 characters max is permitted"),
        institutions: Yup.array()
            .max(20, "Plataform must be less than 20 characters"),
        plataforms: Yup.array()
            .max(20, "Plataform must be less than 20 characters"),
        image: Yup.mixed()  
        
      });
    
      const initial ={
        firstname: '',
        lastname:'',
        email:'',
        password: '',
        confirmpass: '',
        title:'',
        expertise:'',
        description:'',
        institutions:[''],
        plataforms:[''],
        image: ''
    }

    const formik = useFormik({
        initialValues: initial,
        validationSchema: validation,
        onSubmit: values => {
          console.log(values);
          try{
        
            const data = publicAxios.post(
                '/api/v1/auth/teacher-signup',
                
                {
                    name:values.firstname,
                    surname:values.lastname,
                    teacherType:values.description,
                    degreeName:values.title,
                    aboutDescription:values.description,
                    institutions:values.institutions,
                    platforms:values.platform,
                    email:values.email,
                    password:values.password,
                    confirmPassword:values.confirmpass

                });
        
            console.log('Signin Request: ',data)
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
        <div className='box_Title'>
            <h2>Teacher Registration</h2>
        </div>
        <form >
            <div className="box_name">
                <div className='teachers_name'>
                    <PrimaryInput
                        label="First name"
                        type="text"
                        info=""
                        error={formik.errors.firstname}
                        name = "firstname"
                        value = {formik.values.firstname}
                        onChange = {formik.handleChange}
                        
                    />
                    

                    <PrimaryInput
                        label="Last name"
                        type="text"
                        info=""
                        error={formik.errors.lastname}
                        name = "lastname"
                        value = {formik.values.lastname}
                        onChange = {formik.handleChange}
                    />
                </div>
                <div className='box_image'>
                    <div className='teacher_image'>
                        <img src={fileUrl} onChange={imageHandle} name="image" ></img>
                    </div>
                    
                    <input type="file" id ="Selectedinput" ref={hiddenFileInput} accept="image/*" onChange={imageHandle}></input>
                    <SecondaryButton cursor="pointer"  onClick ={upLoadButton} type="button"> Add Image</SecondaryButton>
                    
                    
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
                        error={formik.errors.confirmpass}
                        name = "confirmpass"
                        value = {formik.values.confirmpass}
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
                                error={formik.errors.title}
                                name = "title"
                                value = {formik.values.title}
                                onChange = {formik.handleChange}
                                
                            />
                        </div>
                    
                        <div>
                            <PrimaryInput
                                label="Expertise"
                                type="text"
                                info=""
                                error={formik.errors.expertise}
                                name = "expertise"
                                value = {formik.values.expertise}
                                onChange = {formik.handleChange}
                            />
                        </div>
                    
                    </div>
                    

                <SecondaryInput
                    label="Description"
                    type="text"
                    info=""
                    error={formik.errors.description}
                    name = "description"
                    value = {formik.values.description}
                    onChange = {formik.handleChange}
                />
            </div>
            
            
            <div className='box_institution'>
                <div className='instituion_holder'>
                <label>Institutions</label>
                    {initial.institutions.map((inst,index)=>(
                        <div key={index} className='institutions'>
                        
                        <div className='instInput'>
                            <PrimaryInput             
                                    type="text"
                                    info=""
                                    error={formik.errors.institutions}
                                    name = {`institutions[${index}]`}
                                    value =  {formik.values.institutions[index]}
                                    onChange = {formik.handleChange}
                                    style={styleInput}
                                />
                        </div>

                        <div className='instButton'>
                            <BaseButton 
                                type="button" 
                                style={{backgroundColor: "blue", fontWeight: 'bold'}}
                                >
                                    <Icon icon="carbon:add-filled" />
                                    ADD
                                </BaseButton>
            
                                <BaseButton type="button" style={{backgroundColor: "gray", fontWeight: 'bold'}}>
                                    <Icon icon="fa6-solid:trash-can" />
                                        DEL
                                </BaseButton>
                        </div>
                        </div>
                        
                    ))}
                </div>

                <div className='platform_holder'>
                <label>Plataforms</label>
                    {initial.institutions.map((palt,index2)=>(
                        <div key={index2} className='plataforms'>
                        
                            <div className='platInput'>
                                <PrimaryInput             
                                        type="text"
                                        info=""
                                        error={formik.errors.plataforms}
                                        name = {`plataforms[${index2}]`}
                                        value =  {formik.values.plataforms[index2]}
                                        onChange = {formik.handleChange}
                                        style={styleInput}
                                    />
                            </div>

                            <div className='platButton'>
                                <BaseButton 
                                    type="button" 
                                    style={{backgroundColor: "blue", fontWeight: 'bold'}}
                                    >
                                        <Icon icon="carbon:add-filled" />
                                        ADD
                                </BaseButton>
                
                                <BaseButton type="button" style={{backgroundColor: "gray", fontWeight: 'bold'}}>
                                        <Icon icon="fa6-solid:trash-can" />
                                            DEL
                                </BaseButton>
                            </div>

                        </div>
                        
                    ))}
                </div>
                
                
        
            </div>

            <div className='box_buttons'>
                <div className='button'>
                    <PrimaryButton type="submit" onClick={formik.handleSubmit}>
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


