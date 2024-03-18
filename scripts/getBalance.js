const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/SamToken.sol/SamToken.json");

const contractAddress = "0xF2Ff8d42fe9753C40Fa51679A2cecD667B2f4D90"; // place your erc20 contract address here
const contractABI = contractJSON.abi;
const walletAddress = "0x9434E0a9878a1bE87918762a846dBEa7B333B5DE";

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

  console.log(
    `${walletAddress} has: ${await contract.balanceOf(walletAddress)} NFTs`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
