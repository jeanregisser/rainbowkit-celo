import { Chain } from '@rainbow-me/rainbowkit';

const Baklava: Chain = {
  id: 62320,
  name: 'Baklava',
  network: 'Baklava Testnet',
  iconUrl: 'https://reserve.mento.org/assets/tokens/CELO.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'CELO',
    symbol: 'B-CELO',
  },
  rpcUrls: {
    default: 'https://baklava-forno.celo-testnet.org',
  },
  blockExplorers: {
    default: { name: 'Block Scout', url: 'https://baklava-blockscout.celo-testnet.org' },
    etherscan: { name: 'Block Scout', url: 'https://baklava-blockscout.celo-testnet.org' },
  },
  testnet: true,
};

export default Baklava;
