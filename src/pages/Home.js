import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import '../styles/Home/Home.css'
import Button from '../components/Button/Button';
import * as data from '../service/menuItems.json';
import MinMenuItem from '../components/MInMenuItem/MinMenuItem';

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};
const handleDragStart = (e) => e.preventDefault();
const items = [
  <img src="https://thumb.tildacdn.com/tild3964-3839-4538-b732-326432663531/-/cover/760x550/center/center/-/format/webp/1b54aa0bca2a0db881de.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://thumb.tildacdn.com/tild6332-3763-4933-a433-393362353032/-/cover/760x550/center/center/-/format/webp/Q-T73BnLp_g.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://thumb.tildacdn.com/tild6265-3965-4466-b264-623161623361/-/cover/760x550/center/center/-/format/webp/photo.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://thumb.tildacdn.com/tild6430-6133-4566-a464-356530326264/-/cover/760x550/center/center/-/format/webp/C450CDFB-BF40-4A96-8.jpeg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://thumb.tildacdn.com/tild6235-3331-4364-a630-336166346138/-/cover/760x550/center/center/-/format/webp/wGVY3fAwKi0.jpg" onDragStart={handleDragStart} role="presentation" />,
];

const result = [];
for(var i in data) {
  result.push([i, data[i]]);
}

console.log(result);
const elements = result.map((item, i) => {
  if ( i < 9) {
    return (<MinMenuItem key={i} data = {item[1]}/>)
  } else {
    return('')
  }
})

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
          <div className="adress">
            <p><b>УЛ. МАРАТА, 67/17</b></p>
            <p>пн-пт 10:00-23:00, сб-вс 11:00-23:00</p>
          </div>
          <Button textOnBtn="ЗАБРОНИРОВАТЬ СТОЛИК" btnClassName="ussualBtn" inlineStyle="padding:0 60px:fontSize:16px:marginBottom:20px:line-height:60px"></Button>
          <p className='textUnderButton'>Попадая сюда, вы будто переноситесь из суетливой Северной столицы в изысканную и дружелюбную Италию, где насладитесь традиционными и современными блюдами!</p>
        </div>
        

      </div>  
    );
  }
  
  export default Home;