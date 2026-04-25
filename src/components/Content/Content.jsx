import TVListing from "../../pages/TVListing/TVListing";
import PhoneListing from "../../pages/PhoneListing/PhoneListing";

const Content = (props) => {
  const {pageType} = props

  return (
    <>
      {pageType === "tv" && (<TVListing />)}
      {pageType === "phone" && (<PhoneListing />)}
    </>
  )
}

export default Content;