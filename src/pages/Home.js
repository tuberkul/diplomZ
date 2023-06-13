import '../styles/Home/Home.css'
import Button from '../components/Button/Button';
import * as data from '../service/menuItems.json';
import MinMenuItem from '../components/MInMenuItem/MinMenuItem';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {NavLink} from "react-router-dom";

const result = [];
for(var i in data) {
  result.push([i, data[i]]);
}

const elements = result.map((item, i) => {
  if ( i < 9) {
    return (<NavLink to="/menu" key={i}><MinMenuItem data = {item[1]} onClick={onTouchMenu}/></NavLink>)
  } else {
    return('')
  }
})

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};
const handleDragStart = (e) => {
  e.preventDefault();

}

function onTouchMenu() {

}

const items = [
  <div>
    <img src="https://thumb.tildacdn.com/tild3964-3839-4538-b732-326432663531/-/cover/760x550/center/center/-/format/webp/1b54aa0bca2a0db881de.jpg" onDragStart={handleDragStart} role="presentation" alt='1' />
    <div className="">
      <p><b>УЛ. ЛАНСКОЕ ШОССЕ, 13</b></p>
      <p>ежедневно 11:00 - 23:00</p>
    </div>
  </div>,
  <div>
    <img src="https://thumb.tildacdn.com/tild6332-3763-4933-a433-393362353032/-/cover/760x550/center/center/-/format/webp/Q-T73BnLp_g.jpg" onDragStart={handleDragStart} role="presentation" alt='1'/>
    <div className="">
      <p><b>УЛ. ЗАХАРЬЕВСКАЯ, 27</b></p>
      <p>ежедневно 11:00 - 23:00</p>
    </div>
  </div>,
  <div>
    <img src="https://thumb.tildacdn.com/tild6265-3965-4466-b264-623161623361/-/cover/760x550/center/center/-/format/webp/photo.jpg" onDragStart={handleDragStart} role="presentation" alt='1'/>
    <div className="">
      <p><b>ВЛАДИМИРСКИЙ ПРОСПЕКТ, 8</b></p>
      <p>ежедневно 11:00 - 23:00</p>
    </div>
  </div>,
  <div>
    <img src="https://thumb.tildacdn.com/tild6430-6133-4566-a464-356530326264/-/cover/760x550/center/center/-/format/webp/C450CDFB-BF40-4A96-8.jpeg" onDragStart={handleDragStart} role="presentation" alt='1'/>
    <div className="">
      <p><b>УЛ. ВОССТАНИЯ, 33</b></p>
      <p>пн-пт 10:00-23:00, сб-вс 11:00-23:00</p>
    </div>
  </div>
  ,
  <div>
    <img src="https://thumb.tildacdn.com/tild6235-3331-4364-a630-336166346138/-/cover/760x550/center/center/-/format/webp/wGVY3fAwKi0.jpg" onDragStart={handleDragStart} role="presentation" alt='1'/>
    <div className="">
      <p><b>УЛ. МАРАТА, 67/17</b></p>
      <p>пн-пт 10:00-23:00, сб-вс 11:00-23:00</p>
    </div>
  </div>,
];

const items2 = [
  <div className='item_review'>
    <p>Замечательное, уютное заведение в центре. Хорошее обслуживание, вкусная кухня. Персонал отзывчивый, готов прийти на помощь даже незадолго до закрытия. Надеюсь попасть туда вновь!</p>
    <img src='https://thumb.tildacdn.com/tild3631-6463-4837-b262-343432636530/-/cover/200x200/center/center/-/format/webp/__2021-04-20__145102.png' alt='1'></img>
    <p><b>Alex Nesterov</b></p>
  </div>,
  <div className='item_review'>
    <p>Очень уютно, вкусно, чисто, в нижней части дивана спряталась розетка, закажите обязательно белое вино, закройте глаза и окажитесь на побережье Средиземного моря, ну на крайний случай Адриатического. Тут это можно сделать, любуясь нашим любимым петербургским дождём через окно, открыв глаза....</p>
    <img src='https://thumb.tildacdn.com/tild3438-6632-4937-b562-306664633437/-/cover/200x200/center/center/-/format/webp/__2021-04-20__144928.png' alt='1'></img>
    <p><b>Сергей Аброськин</b></p>
  </div>,
  <div className='item_review'>
      <p>Прекрасное место! Приятная обстановка и уютная атмосфера. Персонал ресторана качественно выполняет свою работу и готовит очень вкусную пиццу!!!</p>
      <img src='https://thumb.tildacdn.com/tild6363-3864-4761-b830-393962393466/-/cover/200x200/center/center/-/format/webp/-9PgWwRKmPc.jpg' alt='1'></img>
      <p><b>Егор Зимин</b></p>
  </div>,
  <div className='item_review'>
      <p>Очень классное место! Все сделано на высшем уровне: и вкусная еда от поваров, и хорошие настроение и работа официантов, и приятная атмосфера.</p>
      <img src='https://thumb.tildacdn.com/tild6262-6230-4365-b730-643637363736/-/cover/200x200/center/center/-/format/webp/WgjEr-Ah_S8.jpg' alt='1'></img>
      <p><b>Даниил Блохин</b></p>
  </div>,
  <div className='item_review'>
      <p>Всё очень вкусно, готовят быстро, обслуживают с улыбкой и качественно, ценник приемлемый, не докапаться, да и не хочется. Рекомендую.</p>
      <img src='https://thumb.tildacdn.com/tild3661-3235-4564-a637-353463336135/-/cover/200x200/center/center/-/format/webp/__2021-04-20__144731.png' alt='1'></img>
      <p><b>Никита Третьяков</b></p>
  </div>,
  <div className='item_review'>
      <p>Очень приятное место с красивой подачей) кофе ароматный и вкусный, давно такой не пила 🤍 Спасибо вам</p>
      <img src='https://thumb.tildacdn.com/tild3266-3066-4538-b064-623661653833/-/cover/200x200/center/center/-/format/webp/__2021-04-20__144820.png' alt='1'></img>
      <p><b>Лера Захарова</b></p>
  </div>,
  <div className='item_review'>
      <p>Спешу оставить свой отзыв! Стала счастливым обладателем сертификата на ужин в кафе Liman. Хочу выразить огромную благодарность организаторам! Приятная обстановка, красивая подача блюд, очень вкусная едажелаю Вам процветания и побольше постоянных клиентов</p>
      <img src='https://thumb.tildacdn.com/tild6630-6464-4361-b563-366163336663/-/cover/200x200/center/center/-/format/webp/trm-rprgVCo.jpg' alt='1'></img>
      <p><b>Анюта Богданова</b></p>
  </div>
]

document.querySelectorAll(".scrollToMenu").forEach(link => {
  link.addEventListener("click", function (e) {
      e.preventDefault();
      const scrollTarget = document.querySelector('.minMenu');
      const topOffset = 75;
      // const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: "smooth"
      });
  });
});

function Home() {

    return (
      <div className="Home">
        <div className="box background-tint">
          <div className="u-relative">
            <h1 className='white'>РЕСТОРАН ИТАЛЬЯНСКОЙ КУХНИ LIMAN</h1>
            <p style={{color: "#f8f8f8", opacity: 0.7}}>Легкая атмосфера, традиционная и современная кухня</p>
          </div>
        </div>
        <svg className='arrowDown scrollToMenu' role="presentation" style={{fill:"#ffffff"}} x="0px" y="0px" width="38.417px" height="30.592px" viewBox="0 0 38.417 18.592"><g><path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path></g></svg>
        <div className="minMenu">
          <div className="minMenu_headline">
              <h2>Итальянские разделы нашего меню</h2>
              <p>В меню собраны традиционная паста, классическая и авторская пицца, европейские крем-супы, овощные салаты, рыбные и мясные горячие блюда. Барная карта включает подборку красных, белых и игристых вин по демократичным ценам, кофейную классику, а также холодные и горячие коктейли.</p>
          </div>
          <div className="btnsMenuWrapper">
            <Button textOnBtn="Основное меню" btnClassName="ussualBtn" inlineStyle="padding:20px 60px:fontSize:16px:height:55px"></Button>
            <Button textOnBtn="Банкетное меню" btnClassName="ussualBtn" inlineStyle="padding:20px 60px:fontSize:16px:height:55px"></Button>
            <Button textOnBtn="Барное меню" btnClassName="ussualBtn" inlineStyle="padding:20px 60px:fontSize:16px:height:55px"></Button>
          </div>
          <div className="minMenuItem">
            {elements}
          </div>
        </div>
        <div className="minDelivery background-tint">
          <div className="u-relative">
            <h2 className='white'>Доставка итальянской еды от 30 минут во все районы города!</h2>
            <p className='white'>Каждый день | 11:00 - 22:30</p>
            <Button textOnBtn="Посмотреть меню" btnClassName="ussualBtn" inlineStyle="padding:20px 60px:fontSize:16px:height:55px:marginTop:20px"></Button>
          </div>
        </div>
        <div className="about_us">
          <h2>Немного о нас:</h2>
          <p>Мы предлагаем незабываемые чувства и моменты, проведенные вместе. У нас в гостях все достаточно просто, демократично, жизнерадостно и по-итальянски приятно.</p>
          <AliceCarousel  mouseTracking
                          items={items}
                          responsive={responsive}
                          controlsStrategy="alternate"
                          disableButtonsControls="false"
                          infinite="true" 
                          />
          <Button textOnBtn="ЗАБРОНИРОВАТЬ СТОЛИК" btnClassName="ussualBtn" inlineStyle="padding:0 60px:fontSize:16px:marginBottom:20px:lineHeight:60px"></Button>
          <p className='textUnderButton'>Попадая сюда, вы будто переноситесь из суетливой Северной столицы в изысканную и дружелюбную Италию, где насладитесь традиционными и современными блюдами!</p>
        </div>
        <div className="reviews">
          <h2>Отзывы наших гостей</h2>
        <AliceCarousel  mouseTracking
                          items={items2}
                          responsive={responsive}
                          controlsStrategy="alternate"
                          disableButtonsControls="false"
                          infinite="true" 
                          />
          <Button textOnBtn="ОСТАВИТЬ ОТЗЫВ" btnClassName="ussualBtn" inlineStyle="padding:0 60px:fontSize:16px:marginBottom:40px:lineHeight:60px:marginTop:20px"></Button>
        </div>
        <div className="discounts">
          <h2>Наши скидки и акции</h2>
          <div className="discounts_items_wrapper">
            <div className="discounts_item">
              <img src="https://thumb.tildacdn.com/tild6435-6435-4634-b438-643830396561/-/cover/720x504/center/center/-/format/webp/pexels-photo-1405528.jpeg" alt="" />
              <p><b>Кэшбек 30% баллами<br />в День Рождения </b></p>
              <p>Действует за 1 день до и 5 дней после Дня Рождения. Комплимент от ресторана в подарок при предъявлени паспорта. Кэшбек баллами в нашей программе лояльности действует только в ресторане, не суммируется с другими скидками и акциями. </p>
            </div>
            <div className="discounts_item">
              <img src="https://thumb.tildacdn.com/tild3862-6336-4261-b638-373739343132/-/cover/720x504/center/center/-/format/webp/Liman_12-09-21_189.jpg" alt="" />
              <p><b>Пицца в подарок</b></p>
              <p>Дарим большую пиццу с ветчиной и грибам в подарок при заказе от 1700 рублей*. Акция действует только на доставку и самовынос, не суммируется с другими скидками и акциями.</p>
            </div>
            <div className="discounts_item">
              <img src="https://thumb.tildacdn.com/tild3466-6565-4462-b936-396566373136/-/cover/720x504/center/center/-/format/webp/Lhsm344QR4I.jpg" alt="" />
              <p><b>Кэшбек 20% баллами при заказе на самовывоз</b></p>
              <p>Кэшбек не распространяется на обеды и не суммируется с другими скидками и акциями.</p>
            </div>
          </div>
        </div>
      </div>  
    );
  }
  
  export default Home;