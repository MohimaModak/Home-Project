import InnerCards from "../InnerCards/InnerCards";
import Invetations from "../Invetations/Invetations";
import Banner from "../Sections/Banner/Banner";
import HouseSection from "../Sections/HouseSection/HouseSection";
// import SearchSection from "../Sections/SearchSection/SearchSection";

const Home = () => {
  return (
    <div className="bg-slate-200 m-5">
      <Banner></Banner>
      {/* <SearchSection></SearchSection> */}
      <HouseSection></HouseSection>
      <Invetations></Invetations>
      <InnerCards></InnerCards>
    </div>
  );
};

export default Home;
