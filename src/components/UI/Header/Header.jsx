import './Header.css';
import { useContext, useState } from 'react';
import { Icon } from '@iconify/react';
import AuthContext from '../../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { SecondaryButton } from '../Form/Button/Button';

const Header = ({showSearch = true}) => {
    const { auth, setAuth } = useContext(AuthContext);
    const [ text, setText ] = useState('');
    const navigate = useNavigate();

    const logout = () => {
        setAuth({});
        navigate('/login');
    }

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
            {
                auth.user ? (
                    <>
                        <button type='button' className='login_button' onClick={() => navigate(`/profile/${auth.user._id}`)}>
                            <span className="only_large">Hola {auth.user.username.split(' ')[0]}</span>
                            <span className='only_small login_btn_text'>
                                <Icon color='#fff' icon="uil:signin" />
                            </span>
                        </button>
                        <SecondaryButton onClick={logout}>
                            logout
                        </SecondaryButton>
                    </>
                ) : (
                    <button type='button' className='login_button' onClick={() => navigate('/login')}>
                        <span className="only_large">Log in / Sign up</span>
                        <span className='only_small login_btn_text'>
                            <Icon color='#fff' icon="uil:signin" />
                        </span>
                    </button>
                )
            }
        </div>
    </>
  )
}

export default Header;