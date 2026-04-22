import "./Link.css"

const Link = (props) => {
  const {className, content, to} = props;

  return (
    <a href={to} className={`link ${className} `}>{content}</a>
  )
}

export default Link