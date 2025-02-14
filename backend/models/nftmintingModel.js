import mongoose from "mongoose";

const mintingSchema = new mongoose.Schema(
  {
    nftName: { type: String, required: true },
    nftDescription: { type: String, required: true },
    nftImageUrl: { type: String, required: true },
    nftId: { type: Number, required: true, unique: true },
    userWalletAddress: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Minting = mongoose.model("nft", mintingSchema);
export default Minting;
