import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


import "./NavMenu.css"
import logo from '../../img/logo_2.png'
import Button from "../Button/Button";
function NavMenu() {
    const [classForNavMenuWrapper, setclassForNavMenuWrapper] = useState('NavMenuWrapper');
    document.addEventListener('scroll', (e) => {
        if (e.target.scrollingElement.scrollTop !== 0) {
            setclassForNavMenuWrapper('NavMenuWrapper bgBlack');
        } else { 
            setclassForNavMenuWrapper('NavMenuWrapper');    
        }
    })

    return (
        <div className={classForNavMenuWrapper}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navMenuList">
            <div className="white">О нас</div>
            <div className="white">Меню</div>
            <div className="white">Акции</div>
            <div className="white">Контакты</div>
                <Button textOnBtn="Забронировать столик" btnClassName="btnWithoutBackground" inlineStyle="padding:0px 30px:fontSize:14px:height:35px"></Button>
            </div>
        </div>
    );
  }
  
  export default NavMenu;
  