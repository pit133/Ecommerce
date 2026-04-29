import './IconButton.css'

const IconButton = (props) => {
  const {icon, to, onClick} = props;

  const handleClick = (e) => {
    e.preventDefault();
    onClick()
  };

  return (
    <div className='header__icon-link'>
      <a
        className="iconButton-link"
        href={to}
        onClick={handleClick}
      >
        {icon}
      </a>
    </div>
  )
}

export default IconButton