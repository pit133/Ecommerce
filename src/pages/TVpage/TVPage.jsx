import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";

const TVPage = (props) => {
  const {className} = props;
  return (
    <div className="container">
      <Header />
      <main>
        <Filter />
      </main>
    </div>
  )
}

export default TVPage;