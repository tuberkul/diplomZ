import '../styles/Menu/Menu.css'

import MinMenuItem from '../components/MInMenuItem/MinMenuItem';

function Menu() {

    return (
      <div className="Menu">
        <div className="box-menu background-tint">
          <div className="u-relative">
            <h1 className='white'>Взрыв вкуса и здоровья: Меню, которое перевернет ваше представление о здоровом питании!</h1>
          </div>
        </div>
        <div>
          <h2 className='black' style={{textAlign: 'left', paddingLeft: '30px'}}>Закуски:</h2>
          <div className='minMenuItem'>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/tykva.jpg", name: "Запеченные тыквенные кубики с ароматными специями и оливковым маслом", price: "360"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/zakyska_2.jpg", name: "Авокадо-гуакамоле с свежими овощами и хрустящими тостами из цельнозернового хлеба", price: "420"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/zakyska_3.jpeg", name: "Роллы из киноа и овощей с соусом на основе греческого йогурта", price: "500"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/zakyska_4.jpg", name: "Цветная капуста, запеченная с куркумой, кунжутом и лимонным соком", price: "480"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/zakyska_5.jpg", name: "Домашний паштет из куриной печени", price: "420"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/zakyska_6.jpg", name: "Ассорти тапасов", price: "560"}}/>
          </div>
          
        </div>
        <div>
          <h2 className='black' style={{textAlign: 'left', paddingLeft: '30px'}}>Салаты:</h2>
          <div className='minMenuItem'>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/salat_1.jpg", name: "Зеленое оазис", price: "350"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/salat_2.jpg", name: "Медитерранео", price: "400"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/salat_3.jpg", name: "Азиатский вихрь", price: "420"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/salat_4.jpg", name: "Протеиновый удар", price: "380"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/salat_5.jpg", name: "Радужный коктейль", price: "450"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/salat_6.jpg", name: "Итальянский сонет", price: "500"}}/>
          </div>
          
        </div>

        <div>
          <h2 className='black' style={{textAlign: 'left', paddingLeft: '30px'}}>Супы:</h2>
          <div className='minMenuItem'>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          </div>
          
        </div>

        <div>
          <h2 className='black' style={{textAlign: 'left', paddingLeft: '30px'}}>Вторые блюда:</h2>
          <div className='minMenuItem'>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          </div>
          
        </div>

        <div>
          <h2 className='black' style={{textAlign: 'left', paddingLeft: '30px'}}>Десерты:</h2>
          <div className='minMenuItem'>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          </div>
          
        </div>

        <div>
          <h2 className='black' style={{textAlign: 'left', paddingLeft: '30px'}}>Напитки:</h2>
          <div className='minMenuItem'>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          </div>
          
        </div>
      </div>  
    );
  }
  
  export default Menu;