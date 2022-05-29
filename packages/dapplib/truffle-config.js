require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember social grid armed forward swarm'; 
let testAccounts = [
"0x2a692fd408e2c4c0e0c58d0b5fec9d2cedc1795948e49567f733c8239eec158c",
"0x792c173f00e6aa561a4591b790e4e5e816703390868b42022cfdae982b3701b5",
"0xc4d15697d33f388ff14e6f8c84ecbe765054f26a7502afe8c10696d72c61a427",
"0xb2adecbd7d5793fef8ab9f27479f38377f624c41b34861d2d87e9f51b34a86a1",
"0xbd24e0c31409d1e26e9aa03dbc60fdafe965027fd2eda7728470539392922d3a",
"0xa9b1b79f1e2dda1ef434c444ac4b124c82c4a50162da7b9f8aa45c6f844b8413",
"0x754c197a1ad647e70aece5f54740adbfaa4c4d5b2e1257947c140b48331688f6",
"0xafa91950437b3b8d77e7d156b1b1cc67dcc191c0390e9e49b8b3d482a1836139",
"0xd161f48a96f09438178a0010de0aa91ec0435e9e8fbdd05ef2e73a68d21ddf0b",
"0x0cc534b4d68fd9aea06b3a13d1c6a1914937423034f8498063f76b6078f7785a"
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


