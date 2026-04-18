import './IconButton.css'

const IconButton = (props) => {
  return (
    <div className='iconButton'>
      <a className="iconButton-link"
        href="#"
      >
        {props.icon}
      </a>
    </div>
  )
}

export default IconButton