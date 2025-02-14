import "./styles.scss";
import GalleryCard from "./GalleryCard";

interface GalleryProps {
  List: { img: string; title: string; status: string; description: string }[];
}

function Gallery({ List }: GalleryProps) {
  return (
    <div className="container">
      <div className="gallery_component">
        <div className="content">
          <div className="header">
            <h2>Your NFT Gallery</h2>
          </div>
          <div className="gallery_cards">
            {List.map((item, index) => (
              <GalleryCard
                key={index}
                img={item.img}
                status={item.status}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
