 
const {
  expect
} = require("chai").use(require("chai-bignumber")(web3.BigNumber)).should();;
 
 

const ETHERS = 10 ** 18;
const GAS_PRICE = 10 ** 6;

 
  let hardhatToken;
  let owner;
  let addr1;
   

describe("Donat contract", function() {


  it("should check the owner is valid", async function() {
      const [owner ] = await ethers.getSigners();

      const Donat = await ethers.getContractFactory("Donat");

      const hardhatToken = await Donat.deploy();

  });

  it("should accept donations from the donator #1", async () => {
    
    
  });

  

  it("should allow the owner to withdraw the fund", async () => {
      const bAccount = web3.eth.getBalance(account);

      const transferToOwner = await fundingContract.transferToOwner({
          gasPrice: GAS_PRICE
      });


      const difference = web3.eth.getBalance(account).sub(bAccount);

  });
});