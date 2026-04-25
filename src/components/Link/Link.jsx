import "./Link.css"

const Link = (props) => {
  const {className, content, to, onClick} = props;

  const handleClick = (e) => {
    e.preventDefault();
    onClick()
  };

  return (
    <a href={to} className={`link ${className} `} onClick={handleClick}>{content}</a>
  )
}

export default Link