import TVListing from "../../pages/TVListing/TVListing";
import PhoneListing from "../../pages/PhoneListing/PhoneListing";
import LaptopListing from "../../pages/LaptopListing/LaptopListing";

const Content = (props) => {
  const {pageType} = props

  return (
    <>
      {pageType === "tv" && (<TVListing />)}
      {pageType === "phone" && (<PhoneListing />)}
      {pageType === "laptop" && (<LaptopListing />)}
    </>
  )
}

export default Content;