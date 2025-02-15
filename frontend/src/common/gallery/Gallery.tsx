import "./styles.scss";
import GalleryCard from "./GalleryCard";
import { useAccount } from "wagmi";
import axios from "axios";
import { useEffect, useState } from "react";
import { request } from "../../base url/BaseUrl";

interface NFT {
  nftId: number;
  nftName: string;
  nftDescription: string;
  nftImageUrl: string;
  userWalletAddress: string;
}

function Gallery() {
  const { address } = useAccount();
  const [nfts, setNfts] = useState<NFT[]>([]);

  // Fetch NFTs owned by the connected wallet
  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        if (address) {
          const response = await axios.get(
            `${request}/api/mint/gallery/${address}`
          );
          setNfts(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch NFTs:", error);
      }
    };

    fetchNFTs();
  }, [address]);

  return (
    <div className="container">
      <div className="gallery_component">
        <div className="content">
          <div className="header">
            <h2>Your NFT Gallery</h2>
          </div>
          {nfts.length === 0 && (
            <span className="not_found l_flex">
              <p>No NFTs found. Mint your first NFT using the widget above.</p>
            </span>
          )}
          {nfts.length > 0 && (
            <div className="gallery_cards">
              {nfts.map((nft) => (
                <GalleryCard
                  key={nft.nftId}
                  nftId={nft.nftId}
                  img={nft.nftImageUrl}
                  title={nft.nftName}
                  status="old" // You can dynamically set this based on the NFT's creation date
                  description={nft.nftDescription}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
