
function MinMenuItem(props) {
    const data = props.data;
    const {img, name, price} = data;
  return (
    <div className="MinMenuItemWrapper">
        <img src={img} alt="" />
        <p><b>{name}</b></p>
        <p>от {price} р</p>
    </div>
  );
}

export default MinMenuItem;
