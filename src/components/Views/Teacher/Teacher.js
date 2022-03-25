import './Teacher.css'
import { BaseButton, PrimaryButton, SecondaryButton } from '../../UI/Form/Button/Button';
import { PrimaryInput, SecondaryInput } from '../../UI/Form/Input/Input';
import { Icon } from '@iconify/react';
import React, {useRef, useState} from 'react';


const Teacher = () => {
    
    const hiddenFileInput = useRef(null);    
    const [fileUrl, setFileUrl] = useState(["https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"]);
    
    
    let imageHandle=(event)=>{
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
    }
   

    const upLoadButton =()=>{
        hiddenFileInput.current.click();
    }
    
    const styleInput={
        width: '30vw',
        
    }
    return (
    <div className='box'>
        <div className='box_Title'>
            <h2>Teacher Registration</h2>
        </div>
        
        <div className="box_name">
            <div className='teachers_name'>
                <PrimaryInput
                    label="First name"
                    type="text"
                    info=""
                    error=""
                />

                <PrimaryInput
                    label="Last name"
                    type="text"
                    info=""
                    error=""
                />
            </div>
            <div className='box_image'>
                <div className='teacher_image'>
                    <img src={fileUrl} onChange={imageHandle}></img>
                </div>
                   
                 <input type="file" id ="Selectedinput" ref={hiddenFileInput} accept="image/*" onChange={imageHandle}></input>
                <SecondaryButton cursor="pointer"  onClick ={upLoadButton}> Add Image</SecondaryButton>
            </div>
            
        </div>
        
        <div className='box_logindata'>
            <SecondaryInput
                label="Email"
                type="text"
                info=""
                error=""
            />
            <div className='pass'>
                <SecondaryInput
                    label="Password"
                    type="password"
                    info=""
                    error=""
                    style={styleInput}
                    
                />

                <SecondaryInput
                    label="Confirm Pass"
                    type="password"
                    info=""
                    error=""
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
                            error=""
                            
                        />
                    </div>
                   
                    <div>
                        <PrimaryInput
                            label="Expertise"
                            type="text"
                            info=""
                            error=""
                        />
                    </div>
                   
                </div>
                

            <SecondaryInput
                label="Description"
                type="text"
                info=""
                error=""
            />
        </div>

        <div className='box_institution'>
            <div className='institutions'>
                <PrimaryInput
                    label="Institutions"
                    type="text"
                    info=""
                    error=""
                    style={styleInput}
                />

                <div>
                    <BaseButton style={{backgroundColor: "blue", fontWeight: 'bold'}}>
                        <Icon icon="carbon:add-filled" />
                        ADD
                    </BaseButton>

                    <BaseButton style={{backgroundColor: "gray", fontWeight: 'bold'}}>
                        <Icon icon="fa6-solid:trash-can" />
                            DEL
                    </BaseButton>
                </div>
            </div>

            <div className='plataforms'>
                <PrimaryInput
                    label="Plataforms"
                    type="text"
                    info=""
                    error=""
                    style={styleInput}
                />
                <div>
                    <BaseButton style={{backgroundColor: "blue", fontWeight: 'bold'}}>
                        <Icon icon="carbon:add-filled" />
                            ADD
                    </BaseButton>

                    <BaseButton style={{backgroundColor: "gray", fontWeight: 'bold'}}>
                        <Icon icon="fa6-solid:trash-can" />
                            DEL
                    </BaseButton>
                </div>
           
            </div>

        </div>

        <div className='box_buttons'>
            <div className='button'>
                <PrimaryButton>
                    ACCEPT
                </PrimaryButton>
            </div>
            
            <div>
                <SecondaryButton>
                    CANCEL
                </SecondaryButton>
            </div>
            
        </div>
    </div>
  )
}

export default Teacher;