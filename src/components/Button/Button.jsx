import './Button.css'

const Button = (props) => {
  return (
      <>
      <button className={props.signButton ? 'button sign-button':'button'}>
        {props.content}
      </button>
      </>
  )
}

export default Button;
