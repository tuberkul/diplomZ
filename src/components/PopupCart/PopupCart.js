import React,{useState} from "react";
import "./PopupCart.css"
import Button from "../Button/Button";
import IMask from "imask";
const Popup = props => {
  const[PopupClass, setPopupClass] = useState("popup-box")
  function onClosePopup (){
    setPopupClass("popupBoxClose") 
  }
  // var phoneMask = IMask(
  //   document.getElementById('phone-mask'), {
  //     mask: '+{7}(000)000-00-00'
  //   });
  return (
    <div className={PopupClass}>
      <div className="popContainer">
        <span className="close-icon" onClick={onClosePopup}>x</span> 
        <h3>Ваш заказ</h3> 
        <div>здесь будет отображаться выбранные блюда</div>
        <div>а здесь калькулятор цены</div>
        <ul>
          <li>При заказе на сумму свыше 1700 руб. на доставку или самовывоз дарим большую пиццу «С лошадиной спермой» в подарок</li>
          <li>При заказе на сумму свыше 3000 руб. бесплатно накончают в рот</li>
        </ul>
        <form action="">
          <input placeholder="Имя" type="text" id="name" name="client_name"/>
          <input type="tel" id="telNumber" name="client_tel" />
          <label htmlFor="email">Электронная почта</label>
          <input type="email" id="clientEmail" name="client_email" />
          <label htmlFor="text">Доставка</label>
          <input placeholder="Адрес и квартира" type="text" id="delivery" name="client_adress" />
          <label htmlFor="pickup">Самовывоз из ресторана</label>
          <select name="pickupPoint" id="pickup">
            <option value="nope">Нет</option>
            <option value="Vosstanie">ул.Восстания, 33</option>
            <option value="Vladimirsky">ул. Владимирский пр., 8</option>
            <option value="Lanskoe">ул. Ланское шоссе, 13</option>
            <option value="Marata">ул. Марата, 67/17</option>
            <option value="Zaharevskaya">ул. Захарьевская, 27</option>
          </select>
          <input placeholder="Комментарий к заказу" type="text" id="comment" name="commentToTheOrder"/>
          <label htmlFor="tableware">Количество приборов</label>
          <select name="tablewareNumber" id="tableware">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label>Варианты доставки</label>
          <div className="deliveryType">
            <label htmlFor="pickupDelivery" className="light"><input type="radio" name="deliverType" id="pickupDelivery"/>Самовывоз</label>
            <label htmlFor="courierDelivery" className="light"><input type="radio" name="deliverType" id="courierDelivery"/>Доставка курьером 300 руб.</label>
          </div>
          <label>Способ оплаты</label>
          <div className="paymentType">
            <label htmlFor="inRestoraunt" className="light"><input type="radio" name="paymentMethod" id="inRestoraunt" />Оплата в ресторане при получении</label>
            <label htmlFor="onlinePay" className="light"><input type="radio" name="paymentMethod" id="onlinePay" />Кредитной картой (Visa, Mastercard) через Сбербанк</label>
          </div>
          <div className="theAmount">
            <div className="amount">
             <p>Сумма:510руб.</p>
            </div>
            <div className="totalAmount">
             <p style={{fontSize: "24px"}}><b>Итоговая сумма: 510руб.</b></p>
            </div>
          </div>
          <Button textOnBtn="Оформить заказ" btnClassName="ussualBtn" inlineStyle="padding:0 60px:fontSize:16px:marginBottom:40px:lineHeight:60px:marginTop:20px:width:100%"></Button>
          {/* <button type="submit">Оформить заказ</button> */}
          <p>Отправляя данные, вы соглашаетесь с условиями обработки персональных данных.</p>
        </form>
      </div>
    </div>
  );
};
 
export default Popup;