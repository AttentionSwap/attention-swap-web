import { clusterApiUrl } from '@solana/web3.js';

export const NETWORK_ENDPOINTS = [
  {
    name: 'mainnet-beta',
    endpoint: 'https://solana-api.projectserum.com/',
    tokenApi:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/mainnet-beta.json',
  },
  {
    name: 'testnet',
    endpoint: clusterApiUrl('testnet'),
    tokenApi:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/testnet.json',
  },
  {
    name: 'devnet',
    endpoint: clusterApiUrl('devnet'),
    tokenApi:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/devnet.json',
  },
  {
    name: 'localnet',
    endpoint: 'http://127.0.0.1:8899',
    tokenApi:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/localnet.jsonß',
  },
];

export const SOL_WALLET_PROVIDERS = [
  { name: 'sollet.io', url: 'https://www.sollet.io' },
  { name: 'solongwallet.com', url: 'http://solongwallet.com' },
  { name: 'solflare.com', url: 'https://solflare.com/access-wallet' },
  { name: 'mathwallet.org', url: 'https://www.mathwallet.org' },
];

export default {
  NETWORK_ENDPOINTS,
  SOL_WALLET_PROVIDERS,
};
