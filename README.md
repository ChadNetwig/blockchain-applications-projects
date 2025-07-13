## Overview
This repository contains two projects demonstrating blockchain application development:

- **Project 1 – ERC-721 Smart Contract Deployment:** Creating and deploying a non-fungible token (NFT) smart contract to the Polygon Mumbai Testnet using Solidity and Remix.
- **Project 2 – Hyperledger Fabric Private Blockchain and Chaincodes:** (Documentation forthcoming.)

Each project includes an overview, key features, instructions, screenshots, and notes.

---

## Project 1 – ERC-721 Smart Contract Deployment

### Project 1 Overview
This project demonstrates developing and deploying an ERC-721 Token Standard smart contract to the Polygon Mumbai Testnet. The project covers the complete process of writing Solidity code, testing it in Remix, configuring MetaMask, and verifying deployment via Polygonscan.

---

### Key Features
- **Solidity Smart Contract:**
  - Custom ERC-721 token contract.
  - Returns custom strings for `name()`, `symbol()`, and `message()`.
- **Polygon Mumbai Deployment:**
  - Deployed using Remix IDE and MetaMask wallet.
  - Utilizes MATIC test tokens to pay gas fees.
- **Verification:**
  - Transaction details and contract verification on Polygonscan.

---

### Screenshots

**Contract Deployment in Remix**

<img src="assets/Polygon%20Mumbai-contract-test-results.png" alt="Remix Deployment Results" width="700"/>

**Transaction Details**

<img src="assets/Polygon%20Mumbai-polygonscan-transcation-details.png" alt="Polygonscan Transaction Details" width="700"/>

**Polygonscan Contract Verification**

<img src="assets/Polygon%20Mumbai-polygonscan.png" alt="Polygonscan Verification" width="700"/>

**Transaction Hash View**

<img src="assets/Polygon%20Mumbai-polygonscan-transaction-hash.png" alt="Transaction Hash" width="700"/>

**Chainlist Polygon Mumbai Network**

<img src="assets/Polygon%20Mumbai-chainlist.png" alt="Chainlist Network Config" width="700"/>

---

### Technologies Used
- Solidity
- Remix IDE
- MetaMask
- Polygon Mumbai Testnet
- OpenZeppelin Contracts

---

### How to Build and Run

1. **Set Up MetaMask:**
   - Install MetaMask browser extension.
   - Add Polygon Mumbai Testnet via [Chainlist](https://chainlist.org/?testnets=true&search=mumbai).
   - Request test MATIC tokens from the [Mumbai Faucet](https://faucet.polygon.technology/).

2. **Open Remix IDE:**
   - Go to [Remix](https://remix.ethereum.org).
   - Create a new file named `ERC721-Proj1.sol`.

3. **Paste the Smart Contract Code:**
    ```solidity
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

    contract ChadNFT is ERC721 {
        constructor() ERC721("graceful-booth", "FARFCL-CCF") {}

        function message() public pure returns (string memory) {
            return "Beyond borders with DeFi - clnetwig";
        }
    }
    ```

4. **Compile the Contract:**
   - Select Solidity version ^0.8.0.
   - Compile.

5. **Deploy the Contract:**
   - Choose "Injected Web3" environment (MetaMask).
   - Ensure Polygon Mumbai is selected.
   - Deploy and confirm the transaction in MetaMask.

6. **Verify Deployment:**
   - Copy the contract address.
   - Search on [Polygonscan](https://mumbai.polygonscan.com) to verify.

---

### Testing the Deployed Contract with Web3.js

You can verify your deployed ERC-721 contract and call its public methods using Node.js and Web3.js.

1. **Install Node.js and Web3**

    ```bash
    npm install web3
    ```

2. **Use the Provided Test Script**

    Create a file named `web3-client-test-NFT-new.js` and paste in the following example:

    ```javascript
    const { Web3 } = require('web3');

    const web3 = new Web3('https://rpc.ankr.com/polygon_mumbai');

    const contractAddress = 'YOUR_CONTRACT_ADDRESS';

    const contractABI = [
        {
            constant: true,
            inputs: [],
            name: 'message',
            outputs: [{ name: '', type: 'string' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'name',
            outputs: [{ name: '', type: 'string' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
        {
            constant: true,
            inputs: [],
            name: 'symbol',
            outputs: [{ name: '', type: 'string' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
    ];

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    contract.methods.message().call()
        .then((message) => {
            console.log(`Message: ${message}`);
        });

    contract.methods.name().call()
        .then((name) => {
            console.log(`Name: ${name}`);
        });

    contract.methods.symbol().call()
        .then((symbol) => {
            console.log(`Symbol: ${symbol}`);
        });
    ```

    > **Note:** Replace `YOUR_CONTRACT_ADDRESS` with your deployed contract address.

3. **Run the Script**

    ```bash
    node web3-client-test-NFT-new.js
    ```

You should see output displaying the contract’s `name()`, `symbol()`, and `message()` return values.

### Important Notes
- This project uses the Polygon Mumbai Testnet for demonstration purposes only.
- Gas fees were paid using test MATIC from the faucet.
- Contract verification was completed on Polygonscan.

---
---

## Project 2 – Hyperledger Fabric Private Blockchain and Chaincodes

### Overview
This project demonstrates developing, deploying, and testing a supply chain smart contract (chaincode) on a private Hyperledger Fabric network. The project implements core CRUD operations on products, including creating, updating, transferring ownership, and querying ledger entries.

---

### Key Features
- **Custom Chaincode:**
  - Written in Go.
  - Implements `InitLedger`, `CreateProduct`, `UpdateProduct`, `TransferOwnership`, and `QueryProduct`.
- **Automated Unit Tests:**
  - Includes Go test cases to validate smart contract logic.
- **Docker-Based Network:**
  - Fabric test network setup with Docker and Docker Compose.
- **Deployment Automation:**
  - Step-by-step deployment script to package, install, approve, and commit the chaincode.
- **Ledger Interaction:**
  - Querying and invoking functions via the peer CLI.

---

### Screenshots

**Hyperledger Fabric Docker Network**

<img src="assets/docker-hyperledger-network.png" alt="Hyperledger Fabric Network Containers" width="700"/>

**Chaincode Query Results**

<img src="assets/chaincode-query-results.png" alt="Chaincode Query Output" width="700"/>

---

### Technologies Used
- Hyperledger Fabric
- Go (Golang)
- Docker and Docker Compose
- jq and cURL
- Fabric CLI tools

---

### How to Build and Run

1. **Install Prerequisites**
   - Install Go from [https://go.dev/doc/install](https://go.dev/doc/install).
   - Install Docker and Docker Compose.
   - Install `jq` and `curl`.

2. **Set Up Hyperledger Fabric**

    ```bash
    curl -sSL https://bit.ly/2ysbOFE | bash -s
    git clone https://github.com/hyperledger/fabric-samples
    cd fabric-samples/test-network
    ```

3. **Launch Test Network**

    ```bash
    ./network.sh down
    ./network.sh up
    ./network.sh createChannel
    ```

4. **Prepare Chaincode**
   - Copy your `smartcontract.go` into your project directory.
   - Run `go mod vendor` to vendor dependencies.

5. **Package Chaincode**

    ```bash
    peer lifecycle chaincode package supplyChain.tar.gz --path <path-to-your-smartcontract-directory> --lang golang --label supplyChain
    ```

6. **Install Chaincode on Peers**
   - For Org1 and Org2, export environment variables as outlined in your project instructions.
   - Run `peer lifecycle chaincode install supplyChain.tar.gz`.

7. **Approve and Commit**
   - Approve the chaincode for each org.
   - Commit the chaincode to the channel.

8. **Invoke Chaincode Functions**

    ```bash
    # Initialize ledger
    peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com \
      --tls --cafile ${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem \
      -C mychannel -n supplyChain \
      --peerAddresses localhost:7051 \
      --tlsRootCertFiles ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt \
      --peerAddresses localhost:9051 \
      --tlsRootCertFiles ${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt \
      -c '{"function":"InitLedger","Args":[]}'
    ```

    ```bash
    # Query all products
    peer chaincode query -C mychannel -n supplyChain -c '{"Args":["GetAllProducts"]}'
    ```

---

### Important Notes
- Chaincode development and deployment require Docker-based Fabric test network.
- Always run `./network.sh down` before restarting the network.
- Package IDs must be copied accurately when approving chaincode for each org.

---

### License
This project is provided for educational and illustrative purposes. No warranty is expressed or implied.
