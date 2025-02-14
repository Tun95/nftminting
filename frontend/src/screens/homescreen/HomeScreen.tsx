import MintForm from "../../components/form/mintnft/MintForm";
import { Helmet } from "react-helmet-async";
import Intro from "../../components/mint home/intro/Intro";
import Gallery from "../../common/gallery/Gallery";
import s1 from "../../assets/home/s1.png";
import s2 from "../../assets/home/s2.png";
import s3 from "../../assets/home/s3.png";

const List = [
  {
    img: s1,
    title: "Cosmic Dreams #001",
    status: "old",
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
function HomeScreen() {
  return (
    <>
      <Helmet>
        <title>Mint NFT</title>
      </Helmet>
      <div className="home_screen">
        <div className="home_content">
          <Intro />
          <MintForm />
          <Gallery List={List} />
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
