import '../styles/Menu/Menu.css'

import MinMenuItem from '../components/MInMenuItem/MinMenuItem';

function Menu() {

    return (
      <div className="Menu">
        <div className="box-menu background-tint">
          <div className="u-relative">
            <h1 className='white'>Доставка итальянской кухни от 30 минут во все районы города!</h1>
            <p style={{color: "#f8f8f8", opacity: 0.7}}>Каждый день | 11:00 - 21:30</p>
          </div>
        </div>
        <div>
          <h2 className='black' style={{textAlign: 'left', paddingLeft: '30px'}}>Закуски:</h2>
          <div className='minMenuItem'>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          </div>
          
        </div>
        <div>
          <h2 className='black' style={{textAlign: 'left', paddingLeft: '30px'}}>Салаты:</h2>
          <div className='minMenuItem'>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
          <MinMenuItem data = {{img: "https://thumb.tildacdn.com/tild6437-6233-4432-b561-326262656466/-/cover/312x362/center/center/-/format/webp/c.png", name: "Салат", price: "240"}}/>
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