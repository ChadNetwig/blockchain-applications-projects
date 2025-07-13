const { Web3 } = require('web3');

// Connect to the Polygon Mumbai RPC endpoint
const web3 = new Web3('https://rpc.ankr.com/polygon_mumbai');

// Address of your ERC721 contract
const contractAddress = '0x750331FE8db9a0284b99EF32D56Baa840393b6F4';

// ABI (Application Binary Interface) of the ERC721 contract
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

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Call the "message" method
contract.methods.message().call()
    .then((message) => {
        console.log(`Message from the ERC721 contract: ${message}`);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// Call the "name" method
contract.methods.name().call()
    .then((name) => {
        console.log(`Name of the ERC721 contract: ${name}`);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// Call the "symbol" method
contract.methods.symbol().call()
    .then((symbol) => {
        console.log(`Symbol of the ERC721 contract: ${symbol}`);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
