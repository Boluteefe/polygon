const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/BoluToken.sol/BoluToken.json");

const contractAddress = "0xe77c6C0B7a8c7726c5BD25e53b4471BFA3e218E6";
const contractABI = contractJSON.abi;
const tokenId = 4;

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  console.log(`NFT tokenId ${tokenId}`);
  console.log(`Prompt: ${await contract.prompt(tokenId)}`);
  console.log(`NFT owner: ${await contract.ownerOf(tokenId)}`);
  console.log(`URI: ${await contract.tokenURI(tokenId)}`);
  console.log(`URL: https://ipfs.io/ipfs/${await contract.tokenURI(tokenId)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
