import './Button.css'

const Button = (props) => {
  const {className, content, onClick} = props;
  return (
      <>
      <button className={`${className} button`} onClick={onClick}>
        {props.content}
      </button>
      </>
  )
}

export default Button;
