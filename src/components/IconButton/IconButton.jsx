import './IconButton.css'

const IconButton = (props) => {
  return (
    <div className='iconButton'>
      <a
        href="#"
      >
        {props.icon}
      </a>
    </div>
  )
}

export default IconButton