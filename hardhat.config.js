/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const rinkeby_PRIVATE_KEY = "7e923d52886172411a38d2a440a4d2fadf7e6a2819294d4cb7c75279363f65a2"; 
  
 require("@nomiclabs/hardhat-waffle");
 require("@nomiclabs/hardhat-web3");
 //require("@nomiclabs/hardhat-etherscan");

 

module.exports = {
  solidity: "0.7.3",

  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/207f9313845e42f2ab2469a252ba1d10",
      accounts: [ `${rinkeby_PRIVATE_KEY}` ],
    },
  },
};
