const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/BoluToken.sol/BoluToken.json");

const contractAddress = "0xF2Ff8d42fe9753C40Fa51679A2cecD667B2f4D90";
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
