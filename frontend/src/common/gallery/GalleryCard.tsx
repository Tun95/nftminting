interface GalleryCardProps {
  img: string;
  title: string;
  status: string;
  description: string;
}

function GalleryCard({ img, title, status, description }: GalleryCardProps) {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "path/to/default/image.png"; // Fallback image if the NFT image URL is invalid
  };

  return (
    <div className={`list_items ${status === "new" && "new"}`}>
      <div className="img_new_pallet">
        <div className="img">
          <img src={img} alt={title} onError={handleImageError} />
        </div>
        {status === "new" && (
          <div className="pallet">
            <small> New</small>
          </div>
        )}
      </div>
      <div className="title_description">
        {" "}
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="description">
          <small>
            <p>{description}</p>
          </small>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
