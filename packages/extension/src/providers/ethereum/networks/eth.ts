import tokenbalanceMew from "@/providers/ethereum/libs/assets-handlers/tokenbalance-mew";
import mewNFTHandler from "@/libs/nft-handlers/mew";
import { ProviderName } from "@/types/provider";
import { NetworkNames, SignerType } from "@enkryptcom/types";
import { toChecksumAddress } from "ethereumjs-util";
import API from "../libs/api";
import createIcon from "../libs/blockies";
import { EthereumNodeType } from "../types";
const ethNode: EthereumNodeType = {
  name: NetworkNames.Ethereum,
  name_long: "Ethereum",
  homePage: "https://ethereum.org",
  blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
  blockExplorerAddr: "https://etherscan.io/address/[[address]]",
  chainID: 1,
  isTestNetwork: false,
  currencyName: "ETH",
  node: "wss://nodes.mewapi.io/ws/eth",
  icon: require("./icons/eth.svg"),
  signer: [SignerType.secp256k1],
  gradient: "#8247E5",
  displayAddress: (address: string) => toChecksumAddress(address),
  provider: ProviderName.ethereum,
  coingeckoID: "ethereum",
  NFTHandler: mewNFTHandler,
  identicon: createIcon,
  assetsHandler: tokenbalanceMew,
  basePath: "m/44'/60'/0'/0",
};
ethNode.api = async () => {
  const api = new API(ethNode.node);
  await api.init();
  return api;
};
export default ethNode;
