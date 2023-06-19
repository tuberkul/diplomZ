import React, {useState} from "react";
import "./PopupCart.css"
import Button from "../Button/Button";
const Popup = ({PopupClass, setPopupClass}) => {
  const [counter, setCounter] = useState(0)

  function onClosePopup (){
    setPopupClass("popupBoxClose");

  }

  const handleClick1 = () => {

    setCounter(counter + 1)
  }

  const handleClick2 = () => {

    setCounter(counter - 1)
    if (counter <= 0) {
      setCounter(0)
    }
  }


  return (
    <div className={PopupClass}>
      <div className="popContainer">
        <span className="close-icon" onClick={onClosePopup}>x</span> 
        <h3>БРОНИРОВАНИЕ СТОЛИКА</h3> 
        <div>Заполните форму для бронирования и получите скидку 10% на весь счет</div>
        <form action="">
          <input placeholder="Ваше имя" type="text" id="name" name="client_name"/>
          <input placeholder="Ваш телефон" type="tel" id="telNumber" name="client_tel" />
          <p>Количество гостей</p>
          <div className="counter_wrapper">
            <svg onClick={handleClick2} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><title/><g id="Complete"><g id="minus"><line fill="none" stroke="rgb(140,194,63)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="4" x2="20" y1="12" y2="12"/></g></g></svg>
            <div className="borderInForm">
                {counter}
            </div>
            <svg onClick={handleClick1} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17Z" fill="rgb(140,194,63)"/></svg>
          </div>
          <p>Дата визита</p>
          <input type="date" className="borderInFormDate"/>
          <p>Время визита</p>
          <input type="time" className="borderInFormDate "/>
          <p>Адрес ресторана</p>
          <label for="ad1"><input type="radio" name="adress" id="ad1"></input>Улица Каменноостровский проспект, дом 67</label>
          <label for="ad2"><input type="radio" name="adress" id="ad2"></input>Проспект Обуховской Обороны, дом 92</label>
          <label for="ad3"><input type="radio" name="adress" id="ad3"></input>Улица Большая Пушкарская, дом 14</label>
          <label for="ad4"><input type="radio" name="adress" id="ad4"></input>Переулок Макаренко, дом 5</label>
          <label for="ad5"><input type="radio" name="adress" id="ad5"></input>Улица Средняя Подьяческая, дом 19</label>
          <p>Перезвонить для подтверждения брони?</p>
          <label for="conf1"><input type="radio" name="conf" id="conf1"></input>Да</label>
          <label for="conf2"><input type="radio" name="conf" id="conf2"></input>Нет</label>
          <Button textOnBtn="Забронировать" btnClassName="ussualBtn" inlineStyle="padding:0 60px:fontSize:16px:marginBottom:40px:lineHeight:60px:marginTop:20px:width:100%"></Button>
          {/* <button type="submit">Оформить заказ</button> */}
          <p>Отправляя данные, вы соглашаетесь с условиями обработки персональных данных.</p>
        </form>
      </div>
    </div>
  );
};
 
export default Popup;