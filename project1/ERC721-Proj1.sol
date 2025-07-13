// FILENAME          : ERC721-Proj1.sol
// DESCRIPTION       : ERC-721 Token Standard Smart Contract for PolyGon Mumbai Testnet
//                   : Returns unique strings when name(), symbol(), and message() are called
// AUTHOR            : Chad Netwig
// DATE              : 04/03/2024
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ChadNFT is ERC721 {

    constructor() ERC721("graceful-booth", "FARFCL-CCF") {}

    function message() public pure returns (string memory) {
        return "Beyond borders with DeFi - clnetwig";
    }
}