async function main(){
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log(`Account balance: ${balance.toString()}`);

    const MyTokenContract = await ethers.getContractFactory('MyToken');
    const myToken = await MyTokenContract.deploy();
    console.log(`Token address: ${myToken.address}`);
}

main()
 .then(()=> process.exit(0))
 .catch(error => {
    console.error(error);
    process.exit(1);
 });