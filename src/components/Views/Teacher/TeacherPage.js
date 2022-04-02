import Teacher from './Teacher'
import Header from '../../UI/Header/Header'
import Page from '../../UI/Page/Page'
import {useState} from 'react';
import {publicAxios} from '../../../Lib/apiClient';



const TeacherPage = () => {
  
  const [firstname, setfirstname] = useState('');
  const [txtSurname, setTxtSurname] = useState('');

  const onConfirm = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    try{
        
        const data = publicAxios.post(
            '/api/v1/auth/teacher-signup',
            
            {
                name:firstname,
                surname:txtSurname
            });
    
        console.log('Signin Request: ',data)
    }catch(ex){
        console.log('Error on Signin submit',ex)
    }

  }

  const onChangeHandler = ({target: {name,value}})=>{
    switch (name){
        case 'firstname':
          setfirstname(value);
        break;
        
        case 'txtSurname':
          setTxtSurname(value);
        break;
        
    }
  }
  return (
    <Page
        header={<Header />}
    >
        <Teacher 
          
        />
    </Page>
  )
}

export default TeacherPage