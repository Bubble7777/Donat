async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const Donat = await ethers.getContractFactory("Donat");
    const donat = await Donat.deploy();
  
    console.log("Token address:", donat.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });