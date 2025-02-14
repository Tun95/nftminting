import { Helmet } from "react-helmet-async";
import Intro from "../../components/mint home/intro/Intro";
import SuccessBox from "../../components/form/success/SuccessBox";
import Gallery from "../../common/gallery/Gallery";

function MintSuccessScreen() {
  return (
    <>
      <Helmet>
        <title>Mint Success</title>
      </Helmet>
      <div className="home_screen">
        <div className="home_content">
          <Intro />

          <SuccessBox />
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default MintSuccessScreen;
