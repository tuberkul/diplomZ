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
console.log(result)
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
      <p><b>Улица Каменноостровский проспект, дом 67</b></p>
      <p>пн-пт 10:00-23:00, сб-вс 11:00-00:00</p>
    </div>
  </div>,
  <div>
    <img src="https://thumb.tildacdn.com/tild6332-3763-4933-a433-393362353032/-/cover/760x550/center/center/-/format/webp/Q-T73BnLp_g.jpg" onDragStart={handleDragStart} role="presentation" alt='1'/>
    <div className="">
      <p><b>Проспект Обуховской Обороны, дом 92</b></p>
      <p>ежедневно 10:00-23:00</p>
    </div>
  </div>,
  <div>
    <img src="https://thumb.tildacdn.com/tild6265-3965-4466-b264-623161623361/-/cover/760x550/center/center/-/format/webp/photo.jpg" onDragStart={handleDragStart} role="presentation" alt='1'/>
    <div className="">
      <p><b>Улица Большая Пушкарская, дом 14</b></p>
      <p>ежедневно 10:00-23:00</p>
    </div>
  </div>,
  <div>
    <img src="https://thumb.tildacdn.com/tild6430-6133-4566-a464-356530326264/-/cover/760x550/center/center/-/format/webp/C450CDFB-BF40-4A96-8.jpeg" onDragStart={handleDragStart} role="presentation" alt='1'/>
    <div className="">
      <p><b>Переулок Макаренко, дом 5</b></p>
      <p>пн-пт 10:00-23:00, сб-вс 10:00-00:00</p>
    </div>
  </div>
  ,
  <div>
    <img src="https://thumb.tildacdn.com/tild6235-3331-4364-a630-336166346138/-/cover/760x550/center/center/-/format/webp/wGVY3fAwKi0.jpg" onDragStart={handleDragStart} role="presentation" alt='1'/>
    <div className="">
      <p><b>Улица Средняя Подьяческая, дом 19</b></p>
      <p>пн-пт 10:00-23:00, сб-вс 10:00-00:00</p>
    </div>
  </div>,
];

const items2 = [
  <div className='item_review'>
    <p>Я впечатлен разнообразием и качеством блюд в этом ресторане! Они действительно умеют создавать вкусные и питательные комбинации. Было приятно наслаждаться здоровым обедом, не жертвуя вкусом. Определенно рекомендую!</p>
    <img src='https://thumb.tildacdn.com/tild3631-6463-4837-b262-343432636530/-/cover/200x200/center/center/-/format/webp/__2021-04-20__145102.png' alt='1'></img>
    <p><b>Александр Золов</b></p>
  </div>,
  <div className='item_review'>
    <p>Здесь я нашел идеальный баланс между вкусом и питательностью. Блюда просто прекрасны, атмосфера уютная, обслуживание отличное. Этот ресторан стал моим любимым местом для здорового питания!</p>
    <img src='https://thumb.tildacdn.com/tild3438-6632-4937-b562-306664633437/-/cover/200x200/center/center/-/format/webp/__2021-04-20__144928.png' alt='1'></img>
    <p><b>Андрей Фролов</b></p>
  </div>,
  <div className='item_review'>
      <p>Я посетил много ресторанов здорового питания, но этот выделяется своим изысканным и творческим подходом к блюдам. Я был приятно удивлен сочетанием вкусов и красивым оформлением каждого блюда. Определенно стоит попробовать!</p>
      <img src='https://thumb.tildacdn.com/tild6363-3864-4761-b830-393962393466/-/cover/200x200/center/center/-/format/webp/-9PgWwRKmPc.jpg' alt='1'></img>
      <p><b>Павел Большак</b></p>
  </div>,
  <div className='item_review'>
      <p>Я чувствую себя настоящим супергероем после посещения этого ресторана здорового питания! Их суперздоровые блюда дарят энергию и силу, словно суперспособности. Спасибо за вдохновение и вкусный опыт!</p>
      <img src='https://thumb.tildacdn.com/tild6262-6230-4365-b730-643637363736/-/cover/200x200/center/center/-/format/webp/WgjEr-Ah_S8.jpg' alt='1'></img>
      <p><b>Владислав Соловьев</b></p>
  </div>,
  <div className='item_review'>
      <p>Скажите 'прощай' скучным диетам, здесь вы наслаждаетесь питательными шедеврами. Этот ресторан здорового питания - мое спасение от обыденности. Они доказывают, что здоровое питание может быть захватывающим и восхитительным!</p>
      <img src='https://thumb.tildacdn.com/tild3661-3235-4564-a637-353463336135/-/cover/200x200/center/center/-/format/webp/__2021-04-20__144731.png' alt='1'></img>
      <p><b>Каролина Носова</b></p>
  </div>,
  <div className='item_review'>
      <p>Я сторонница здорового образа жизни, и этот ресторан полностью соответствует моим ожиданиям. Здесь я нашла широкий выбор вегетарианских и веганских блюд, которые идеально подходят для меня. Вкусно, полезно и приятно!</p>
      <img src='https://thumb.tildacdn.com/tild3266-3066-4538-b064-623661653833/-/cover/200x200/center/center/-/format/webp/__2021-04-20__144820.png' alt='1'></img>
      <p><b>Валерия Машкова</b></p>
  </div>,
  <div className='item_review'>
      <p>Не могу не отметить внимание к деталям и качество продуктов, которые используются в этом ресторане. Каждое блюдо было тщательно приготовлено, и я почувствовала себя здоровой и бодрой после обеда. Большое спасибо!</p>
      <img src='https://thumb.tildacdn.com/tild6630-6464-4361-b563-366163336663/-/cover/200x200/center/center/-/format/webp/trm-rprgVCo.jpg' alt='1'></img>
      <p><b>Светлана Сурикова</b></p>
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
      <div className="Home" name="home">
        <div className="box background-tint">
          <div className="u-relative">
            <h1 className='white'>РЕСТОРАНЫ ЗДОРОВОГО ПИТАНИЯ GRAIN</h1>
            <p style={{color: "#f8f8f8", opacity: 0.7}}>Вкус, который питает здоровье!</p>
          </div>
        </div>
        <svg className='arrowDown scrollToMenu' role="presentation" style={{fill:"#ffffff"}} x="0px" y="0px" width="38.417px" height="30.592px" viewBox="0 0 38.417 18.592"><g><path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path></g></svg>
        <div className="minMenu" name="menu">
          <div className="minMenu_headline">
              <h2>Разделы нашего меню</h2>
              <p>В нашем меню вы найдете широкий выбор блюд, созданных с использованием свежих овощей, зелени и сезонных фруктов. Наша команда талантливых поваров готовит для вас овощные салаты, рыбные и мясные горячие блюда, приготовленные с использованием нежирных и качественных ингредиентов. В баре нашего ресторана представлены свежевыжатые соки, освежающие зеленые смузи и нежирные молочные коктейли, подборка качественных и натуральных напитков, включая органические чаи и травяные настои, а также, безалкогольных коктейлей, приготовленных с использованием свежих фруктов и натуральных ингредиентов.</p>
          </div>
          <div className="btnsMenuWrapper">
            <Button textOnBtn="Основное меню" btnClassName="ussualBtn" inlineStyle="padding:20px 60px:fontSize:16px:height:55px"></Button>
            {/* <Button textOnBtn="Банкетное меню" btnClassName="ussualBtn" inlineStyle="padding:20px 60px:fontSize:16px:height:55px"></Button> */}
            <Button textOnBtn="Барное меню" btnClassName="ussualBtn" inlineStyle="padding:20px 60px:fontSize:16px:height:55px"></Button>
          </div>
          <div className="minMenuItem">
            {elements}
          </div>
        </div>
        <div className="minDelivery background-tint">
          <div className="u-relative">
            <h2 className='white'>Легкие и свежие бизнес-ланчи сделают ваш день ярче!</h2>
            <p className='white'>Каждый день | 10:00 - 14:30</p>
            <Button textOnBtn="Посмотреть меню" btnClassName="ussualBtn" inlineStyle="padding:20px 60px:fontSize:16px:height:55px:marginTop:20px"></Button>
          </div>
        </div>
        <div className="about_us" name="aboutUs">
          <h2>Немного о нас:</h2>
          <p className='textAbout_us'>Мы являемся идеальным местом для тех, кто стремится сохранить здоровье и наслаждаться вкусной пищей одновременно. Мы верим в то, что правильное питание – это не только ключ к благополучию и энергии, но и источник удовольствия. В нашем ресторане мы уделяем особое внимание выбору ингредиентов. Мы тщательно отбираем только свежие и натуральные продукты высокого качества. Наше меню разнообразно и включает в себя широкий выбор блюд, от бодрящих салатов и супов до сытных основных блюд и заманчивых десертов.</p>
          <AliceCarousel  mouseTracking
                          items={items}
                          responsive={responsive}
                          controlsStrategy="alternate"
                          disableButtonsControls="false"
                          infinite="true" 
                          />
          <Button textOnBtn="ЗАБРОНИРОВАТЬ СТОЛИК" btnClassName="ussualBtn" inlineStyle="padding:0 60px:fontSize:16px:marginBottom:20px:lineHeight:60px"></Button>
          <p className='textUnderButton'>Погружаясь в атмосферу нашего ресторана здорового питания, вы словно переноситесь в оазис здоровья и благополучия. Здесь вы сможете насладиться изысканными блюдами, вдохновленными разнообразными кухнями мира, но при этом заботиться о своем здоровье и благополучии.</p>
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
        <div className="discounts" name="promo">
          <h2>Наши скидки и акции</h2>
          <div className="discounts_items_wrapper">
            <div className="discounts_item">
              <img src='../../img/banner_1.png'/>
              <p><b>Скидка 30%<br />в день рождения! </b></p>
              <p>Действует за 2 дня до и 5 дней после дня рождения при предъявлении паспорта. Тёплые поздравления и сладкий подарок от команды ресторана.</p>
            </div>
            <div className="discounts_item">
              <img src="https://thumb.tildacdn.com/tild3862-6336-4261-b638-373739343132/-/cover/720x504/center/center/-/format/webp/Liman_12-09-21_189.jpg" alt="" />
              <p><b>Здоровый обед для детей!</b></p>
              <p>Специальное детское меню со здоровыми и тематическими блюдами, специально разработанными для маленьких гостей. Укрепляем здоровье смолоду!</p>
            </div>
            <div className="discounts_item">
              <img src="https://thumb.tildacdn.com/tild3466-6565-4462-b936-396566373136/-/cover/720x504/center/center/-/format/webp/Lhsm344QR4I.jpg" alt="" />
              <p><b>Скидка 10% при заказе на самовывоз!</b></p>
              <p>Здоровый и вкусный перекус всегда с вами. Скидка не суммируется с другими акциями и скидками кроме скидки на день рождения.</p>
            </div>
          </div>
        </div>
      </div>  
    );
  }
  
  export default Home;