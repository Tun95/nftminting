// import MintForm from "../../components/form/mintnft/MintForm";
import SuccessBox from "../../components/form/success/SuccessBox";
import Intro from "../../components/home/intro/Intro";

function HomeScreen() {
  return (
    <div className="home_screen">
      <div className="home_content">
        <Intro />
        {/* <MintForm /> */}
        <SuccessBox />
      </div>
    </div>
  );
}

export default HomeScreen;
