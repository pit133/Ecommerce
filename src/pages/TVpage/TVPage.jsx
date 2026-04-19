import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import SpecialDeal from "../../components/SpecialDeal/SpecialDeal";

const TVPage = (props) => {
  const {className} = props;
  return (
    <div className="container">
      <Header />
      <aside>
        <Filter />
        <SpecialDeal time={"0:53:50"} />
      </aside>
    </div>
  )
}

export default TVPage;