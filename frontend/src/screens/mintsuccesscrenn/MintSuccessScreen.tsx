import { Helmet } from "react-helmet-async";
import Intro from "../../components/mint home/intro/Intro";
import SuccessBox from "../../components/form/success/SuccessBox";
import Gallery from "../../common/navbar/gallery/Gallery";
import s1 from "../../assets/home/s1.png";
import s2 from "../../assets/home/s2.png";
import s3 from "../../assets/home/s3.png";

const List = [
  {
    img: s1,
    title: "Cosmic Dreams #001",
    status: "new",
    description: "A journey through digital dimensions",
  },
  {
    img: s2,
    title: "Neo Genesis #002",
    status: "old",
    description: "Digital evolution manifested",
  },
  {
    img: s3,
    title: "Digital Horizon #003",
    status: "old",
    description: "Where reality meets digital art",
  },
];

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
          <Gallery List={List} />
        </div>
      </div>
    </>
  );
}

export default MintSuccessScreen;
