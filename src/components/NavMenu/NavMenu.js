import React, { useState } from 'react';
import { Link } from 'react-scroll';
// import { useNavigate } from "react-router-dom";
import Popup from '../PopupCart/PopupCart';

import "./NavMenu.css"
import logo from '../../img/logo_2.png'
import Button from "../Button/Button";
function NavMenu({setVisibilaty}) {
    const [classForNavMenuWrapper, setclassForNavMenuWrapper] = useState('NavMenuWrapper');

    document.addEventListener('scroll', (e) => {
        if (e.target.scrollingElement.scrollTop !== 0) {
            setclassForNavMenuWrapper('NavMenuWrapper bgBlack');
        } else { 
            setclassForNavMenuWrapper('NavMenuWrapper');    
        }
    })
    function onHandleClick() {
        setVisibilaty(true);
        console.log(123)
    }
    return (
        <div className={classForNavMenuWrapper}>

            <div className="logo">
                <Link className="white btnToScroll" to="home" spy={true} smooth={true} offset={-75} duration={500}><img src={logo} alt=""  width='55 px'/></Link>
            </div>
            <div className="navMenuList">
            <div className="white"><Link className="white btnToScroll" to="aboutUs" spy={true} smooth={true} offset={-75} duration={500}>О нас</Link></div>
            <div className="white"><Link className="white btnToScroll" to="menu" spy={true} smooth={true} offset={-75} duration={500}>Меню</Link></div>
            <div className="white"><Link className="white btnToScroll" to="promo" spy={true} smooth={true} offset={-75} duration={500}>Акции</Link></div>
            <div className="white"><Link className="white btnToScroll" to="contacts" spy={true} smooth={true} offset={-75} duration={500}>Контакты</Link></div>
                <Button textOnBtn="Забронировать столик" btnClassName="btnWithoutBackground" inlineStyle="padding:0px 30px:fontSize:14px:height:35px" onHandleClick={onHandleClick}></Button>
            </div>
        </div>
    );
  }
  
  export default NavMenu;
  