const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/BoluToken.sol/BoluToken.json");
require("dotenv").config();

const contractAddress = "0xF2Ff8d42fe9753C40Fa51679A2cecD667B2f4D90";
const contractABI = contractJSON.abi;

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  const totalNFTs = await contract.totalSupply();

  for (let i = 0; i < totalNFTs; i++) {
    console.log(`Prompt ${i + 1}: ${await contract.prompt(i)}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
