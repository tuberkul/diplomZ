import './Button.css';

function Button({textOnBtn, btnClassName, inlineStyle, onHandleClick}) {
  let styleObj = {};
  var arr = inlineStyle.split(':');
  arr.forEach((e, i) => {
    if (i % 2 !== 0 && i !== 0) {
      styleObj[arr[i-1]] = e;
    }
  })
    const text = textOnBtn;
    return (
      <button className={btnClassName} style={styleObj} onClick={onHandleClick}>
          {text}
      </button>
    );
  }
  
  export default Button;