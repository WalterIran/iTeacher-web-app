import './Header.css';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <>
        <div className="header_left">
            <img src="/app-logo.png" alt="logo" />
            <div className="search_container">
                <input type="text" placeholder='Search...' />
                <Icon color='#999' icon="akar-icons:search" />
            </div>
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