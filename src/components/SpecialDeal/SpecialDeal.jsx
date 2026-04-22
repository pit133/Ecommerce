import "./SpecialDeal.css"

const SpecialDeal = (props) => {
  const {time, className} = props;
  return (
    <div className={`special-deal ${className}`}>
      <button className="special-deal__button">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L4 12"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 4L12 12"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="special-deal__text">
        <div className="special-deal__head">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 18.3333C14.6025 18.3333 18.3334 14.6024 18.3334 9.99999C18.3334 5.39762 14.6025 1.66666 10.0001 1.66666C5.39771 1.66666 1.66675 5.39762 1.66675 9.99999C1.66675 14.6024 5.39771 18.3333 10.0001 18.3333Z"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 5V10L13.3333 11.6667"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1>
            Special Deal!
          </h1>
        </div>
        <p>
          Register now to unlock exclusive offers and discounts
        </p>
        <div className="special-deal__offer">
          <p>Offer expires in:</p>
          <div className="special-deal__time">{time}</div>
        </div>
      </div>

    </div>
  )
}

export default SpecialDeal