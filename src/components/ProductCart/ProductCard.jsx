import './ProductCard.css';
import Button from '../Button/Button';
import {useState} from 'react';

const ProductCard = (props) => {
  const {product, onAddToCart, onLike} = props;
  const [isLiked, setIsLiked] = useState(false);
  const [addedCounter, setAddedCounter] = useState(0);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const increment = () => {
    let newCount = addedCounter + 1;
    setAddedCounter(newCount);
  }

  const decrement = () => {
    let newCount = addedCounter - 1;
    setAddedCounter(newCount);
  }

  return (<div className="product-card">
    <div className="product-card__image">
      <img
        src={product.images[0]}
        alt={product.title}
      />
      <button
        className={`product-card__like ${isLiked ? 'product-card__like--active' : ''}`}
        onClick={handleLike}
      >
        {isLiked ? <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6666 9.33333C13.6599 8.36 14.6666 7.19333 14.6666 5.66667C14.6666 4.69421 14.2803 3.76158 13.5926 3.07394C12.905 2.38631 11.9724 2 10.9999 2C9.82659 2 8.99992 2.33333 7.99992 3.33333C6.99992 2.33333 6.17325 2 4.99992 2C4.02746 2 3.09483 2.38631 2.40719 3.07394C1.71956 3.76158 1.33325 4.69421 1.33325 5.66667C1.33325 7.2 2.33325 8.36667 3.33325 9.33333L7.99992 14L12.6666 9.33333Z"
            fill="white"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> : <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z"
            stroke="#0A0A0A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>}

      </button>
    </div>
    <div className="product-card__content">
      <h3 className="product-card__brand">{product.brand}</h3>
      <h2 className="product-card__title">{product.model}</h2>
      <div className="product-card__price">${product.price.toLocaleString('en-US')}</div>

      {addedCounter > 0 ? <div className="product-card__count">
          <Button className="product-card__minus-button" content="-" onClick={decrement} />
          <div>{addedCounter} in cart</div>
          <Button className="product-card__plus-button" content="+" onClick={increment} />
        </div>
        :
        <Button
          content="Add to Cart"
          onClick={increment}
        />}
    </div>
  </div>);
};

export default ProductCard;