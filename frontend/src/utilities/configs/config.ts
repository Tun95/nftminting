import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base, mainnet, sepolia } from "wagmi/chains";
import { http } from "viem"; // Import http from viem for custom transports

const projectId = import.meta.env.VITE_REACT_APP_WALLET_CONNETC_ID;
const infuraId = import.meta.env.VITE_REACT_APP_INFURA_PROJECT_ID;

export const config = getDefaultConfig({
  appName: "mintNFT",
  projectId: projectId,
  chains: [mainnet, base, sepolia],
  transports: {
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${infuraId}`),
  },
  ssr: true,
});
