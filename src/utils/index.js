const contractAddress =  'TXMLpMGT3DMU1ojuykpCzxBuT2cuaDro6K';



const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = await tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },
 


    async getUserInvests(){
        console.log('PROMISE STARTED')
        const balance = await this.contract.userBalance().call();
        console.log('PROMISE ENDED');
            const bal = (parseInt(balance.amount._hex.toString()))/1000000;
            return bal;
        

    },
    async investments(){
        
        const balance = await this.contract.cBalance().call();
        
            const bal = (parseInt(balance.amount._hex.toString()))/1000000;
            return bal;
        

    },
    async userRef(){
        
        const balance = await this.contract.userRefBalance().call();
        
            const bal = (parseInt(balance.amount._hex.toString()))/1000000;
            return bal;
        

    },
    async canwithdraw(){
        
        const balance = await this.contract.withdrawable().call();
        
            const bal = (parseInt(balance.amount._hex.toString()))/1000000;
            return bal;
        

    },

    async givebonus(){
        const act = await this.contract.givebonus().send();
        return act;
    },



    async testwithdraw(){
        const result = await this.contract.withdraw().send();
        return result
    },
 

    

      

        

   


};

export default utils;