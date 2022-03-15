require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stool razor tortoise mixture install infant fresh giant'; 
let testAccounts = [
"0xbe4ced56100c979b0e7dd9f2c38659f7bbc234bb87a509f93c8beca5eb86e092",
"0x9ff50f867c50ad530c6d021fe6e03ac812f7c1b5bf4cb9c43f89750f03e7fb07",
"0x185e2b9b2743f3247bf6a6cd275bfd4b685f7eae26452eadf2c58f1060c540a2",
"0xd620839b7d117be6b49b3b743ee77feb26a90e4e5f746f683d992d7797068e6a",
"0xd0ebb0df475a7261f573384d77a9f95555c677e077893765c7ca5a0a53a07261",
"0x3b19c02ae44390d95512eb9d3070bade577206fd43aae74659effe0de3ebd3f5",
"0xa0b27f7455f532a77aa0e684cfdac3cfa32c13a505ba2a6659ec742b9c249280",
"0xe98a296021c5fce5ba1f6c47119fb3c3dfcbd29f8f6751f3eceb5ff4a6266d13",
"0x2997fc32bf756a300516712a4be994c4c4bc723f1451edfeae068cdf8d6913e1",
"0x9c004daf702e063865f498ab38f388669385db7011c30131244db711f39d6432"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


