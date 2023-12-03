const { ethers } = require("hardhat");

async function main() {

  // Contrato a publicar: Main
  var contract = await ethers.deployContract("Main");
  console.log(`Address del contrato ${await contract.getAddress()}`);

  // Esperar confirmaciones: cuando publicas un contrato en testnet/mainnet
  // necesitas esperar 5 confirmaciones para luego verificar el contrato (script)
  // Esperando 10 confirmaciones
  // Se espera cuando publicas tu contrato en testnet/mainnet. No se usa en blockchain local
    // HARDHAT_NETWORK: mumbai
    // HARDHAT_NETWORK: $ npx hardhat --network [HARDHAT_NETWORK] run script/deploy.js
    var res = await contract.waitForDeployment();
    await res.deploymentTransaction().wait(10);

    // hre: no se declara porque el comando crea un contexto de hardhat donde injecta esa variables
    await hre.run("verify:verify", {
      address: await contract.getAddress(),
      constructorArguments: [],
    });
  

  // 1 publicando el contrato de manera local
  // npx hardhat run scripts/deploy.js
  console.log("FIN");
}

main();
