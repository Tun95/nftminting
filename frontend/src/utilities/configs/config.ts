import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base, mainnet } from "wagmi/chains";

const projectId = "6611d3b02570826751d08f21ecc2bfc5";

export const config = getDefaultConfig({
  appName: "mintNFT",
  projectId: projectId,
  chains: [mainnet, base], 
  ssr: true, // Enable server-side rendering (if needed)
});
