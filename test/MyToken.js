const{expect} = require('chai');

describe('Token contract', () => {
    let myToken, owner, addr1, addr2;

    beforeEach(async () => {
        let MyTokenContract = await ethers.getContractFactory('MyToken');
        myToken = await MyTokenContract.deploy();
        [owner, addr1, addr2, _] = await ethers.getSigners();
    });

    describe('Deployment', () => {
        it('Should set the right owner', async () => {
            expect(await myToken.owner()).to.equal(owner.address);
        });

        it('should assign the total supply of tokens  to the owner', async() => {
            const ownerBalance = await myToken.balanceOf(owner.address);
            expect(await myToken.totalSupply()).to.equal(ownerBalance);
        });
    });

    describe('Transactions', () => {
        it('Should transfer tokens beteewn accounts', async () => {
            await myToken.transfer(addr1.address, 50);
            const addr1Balance = await myToken.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(50);

            await myToken.connect(addr1).transfer(addr2.address, 50);
            const addr2Balance = await myToken.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(50);

        }); 

        it('Should fail if sender doen´t have enough tokens', async () => {
            const initialBalanceOwner = await myToken.balanceOf(owner.address);
            await 
            expect(myToken.connect(addr1).transfer(owner.address, 1))
            .to.be.revertedWith('Not enough tokens');
            
            expect(
                await myToken.balanceOf(owner.address))
            .to.equals(initialBalanceOwner);
        });

        it('Should update balances after transfers', async () => {
            const initialOwnerBalance = await myToken.balanceOf(owner.address);
            await myToken.transfer(addr1.address, 100);
            await myToken.transfer(addr2.address, 50);

            const finalOwnerBalance = await myToken.balanceOf(owner.address);
            expect(finalOwnerBalance).to.equal(initialOwnerBalance-150);

            const addr1Balance = await myToken.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(100);
 
            const addr2Balance = await myToken.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(50);
  
        });
    });

});