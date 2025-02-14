import MintForm from "../../components/form/mintnft/MintForm";
import Intro from "../../components/home/intro/Intro";

function HomeScreen() {
  return (
    <div className="home_screen">
      <div className="home_content">
        <Intro />
        <MintForm />
      </div>
    </div>
  );
}

export default HomeScreen;
