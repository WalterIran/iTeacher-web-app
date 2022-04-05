import './Header.css';
import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Header = ({showSearch = true}) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [ text, setText ] = useState('');

    const onSubmit = (e) => {
        if(e.key === 'Enter' && text !== ''){
            navigate('/search',{
                state:{
                    search: text
                }
            });
        }
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

  return (
    <>
        <div className="header_left">
            <img src="/app-logo.png" alt="logo" />
            {
                showSearch &&
                <div className="search_container">
                    <input type="text" placeholder='Search...' onKeyDown={onSubmit} onChange={handleChange} value={text} />
                    <Icon color='#999' icon="akar-icons:search" />
                </div>
            }
        </div>
        <div className="header_right">
            <button type='button' className='login_button'>
                <span className="only_large">Log in / Sign up</span>
                <span className='only_small login_btn_text'>
                    <Icon color='#fff' icon="uil:signin" />
                </span>
            </button>
        </div>
    </>
  )
}

export default Header