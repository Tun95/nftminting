import express from "express";
import expressAsyncHandler from "express-async-handler";
import Minting from "../models/nftmintingModel.js";

const mintingRouter = express.Router();

//===================
// STORE NFT DATA
//===================
mintingRouter.post(
  "/store",
  expressAsyncHandler(async (req, res) => {
    try {
      const { nftName, nftDescription, nftLogoUrl, nftId, userWalletAddress } =
        req.body;
      const existingNFT = await Minting.findOne({ nftId });
      if (existingNFT) {
        return res
          .status(400)
          .json({ message: "NFT with this ID already exists." });
      }
      const nft = new Minting({
        nftName,
        nftDescription,
        nftLogoUrl,
        nftId,
        userWalletAddress,
      });
      await nft.save();
      res.status(201).json({ message: "NFT stored successfully", nft });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  })
);

//===================
// GET NFT DATA BY ID
//===================
mintingRouter.get(
  "/get/:nftId",
  expressAsyncHandler(async (req, res) => {
    try {
      const nft = await Minting.findOne({ nftId: req.params.nftId });
      if (!nft) {
        return res.status(404).json({ message: "NFT not found" });
      }
      res.status(200).json(nft);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  })
);

//===================
// GET NFT GALLERY BY USER WALLET ADDRESS
//===================
mintingRouter.get(
  "/gallery/:userWalletAddress",
  expressAsyncHandler(async (req, res) => {
    try {
      const nfts = await Minting.find({
        userWalletAddress: req.params.userWalletAddress,
      });
      res.status(200).json(nfts);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  })
);

export default mintingRouter;
