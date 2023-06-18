import "./MinMenuItem.css"

function MinMenuItem(props) {
    const data = props.data;
    const {img, name, price} = data;
  return (
    <div className="MinMenuItemWrapper">
        <img src={img} alt="" />
        <p style={{maxWidth:"250px"}}><b>{name}</b></p>
        <p>{price} р</p>
    </div>
  );
}

export default MinMenuItem;
