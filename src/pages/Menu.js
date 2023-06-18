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
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/sup_1.jpg", name: "Крем-суп из тыквы с кокосовым молоком и имбирными нотками", price: "300"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/sup_2.jpg", name: "Минестроне с овощами, томатами, белыми бобами и свежим базиликом", price: "380"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/sup_3.jpg", name: "Легкий овощной суп с брокколи, шпинатом, горошком и зелеными фасолью", price: "350"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/sup_4.jpg", name: "Томатный гаспачо с огурцом, перцем, луком и базиликом", price: "470"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/sup_5.jpg", name: "Грибной крем-суп с шампиньонами, луком, чесноком и сливками", price: "420"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/sup_6.jpg", name: "Азиатский фасолевый суп с красной фасолью, лапшой, овощами и соусом на основе соевого соуса и имбиря", price: "550"}}/>
          </div>
          
        </div>

        <div>
          <h2 className='black' style={{textAlign: 'left', paddingLeft: '30px'}}>Вторые блюда:</h2>
          <div className='minMenuItem'>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/hot_1.jpg", name: "Гриль-лосось с картофельным пюре из сладкого картофеля и гриль-овощами", price: "450"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/hot_2.jpg", name: "Куриная грудка, запеченная с лимоном и травами, с киноа-салатом и авокадо", price: "500"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/hot_3.jpg", name: "Треска на пару с картофельным гратеном и свежим овощным гарниром", price: "550"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/hot_4.jpg", name: "Вегетарианские котлеты из цветной капусты, овощей и киноа, подаются с соусом на основе греческого йогурта", price: "480"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/hot_5.jpeg", name: "Стейк из индейки с жасминовым рисом и гриль-овощами", price: "550"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/hot_6.jpg", name: "Веганская паста с томатным соусом, грибами, шпинатом и тостовыми крошками", price: "420"}}/>
          </div>
          
        </div>

        <div>
          <h2 className='black' style={{textAlign: 'left', paddingLeft: '30px'}}>Десерты:</h2>
          <div className='minMenuItem'>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/desert_1.jpg", name: "Фруктовый салат с свежими сезонными фруктами, подается с йогуртовым соусом и посыпается гранолой", price: "300"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/desert_2.jpg", name: "Шоколадный авокадо-пудинг с натуральным какао, медом и ягодами", price: "350"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/desert_3.jpg", name: "Лимонный чизкейк с миндальным основанием и нежным сырным кремом на основе греческого йогурта", price: "400"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/desert_4.jpg", name: "Банановые оладьи с орехами, кокосовой стружкой и кленовым сиропом", price: "380"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/desert_5.jpg", name: "Мороженое на основе кокосового молока с ванильным ароматом, подается с свежими ягодами и миндальной крошкой", price: "400"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/desert_6.jpg", name: "Ягодная парфе с слоями свежих ягод, йогурта и орехового гранолы", price: "450"}}/>
          </div>
          
        </div>

        <div>
          <h2 className='black' style={{textAlign: 'left', paddingLeft: '30px'}}>Напитки:</h2>
          <div className='minMenuItem'>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/drink_1.jpg", name: "Свежевыжатые соки: яблочный, апельсиновый, грейпфрутовый, морковный, свекольный и другие комбинации соков из свежих овощей и фруктов", price: "240"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/drink_2.jpg", name: "Зеленые смузи: смузи на основе зеленых овощей, таких как шпинат, кале, и яблок, с добавлением свежих фруктов и зелени", price: "300"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/drink_3.jpg", name: "Компоты: натуральные компоты из свежих фруктов, таких как яблоки, груши, вишни, с добавлением нежирного йогурта или меда для сладости", price: "240"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/drink_4.jpg", name: "Травяные чаи: различные травяные чаи, такие как ромашка, мята, зеленый чай, имбирный чай, которые имеют положительное воздействие на организм", price: "300"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/drink_5.jpg", name: "Протеиновые коктейли: коктейли на основе протеинового порошка с добавлением фруктов, орехового молока или йогурта, которые способствуют восстановлению мышц после тренировок", price: "350"}}/>
          <MinMenuItem data = {{img: "https://tuberkul.github.io/diplomZ/src/img/drink_6.jpg", name: "Натуральные минеральные воды: предложение разнообразных натуральных минеральных вод без добавления газа и консервантов", price: "240"}}/>
          </div>
          
        </div>
      </div>  
    );
  }
  
  export default Menu;