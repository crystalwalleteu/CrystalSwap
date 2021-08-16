pragma solidity =0.5.16;

import '../CrystalERC20.sol';

contract ERC20 is CrystalERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
