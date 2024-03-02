import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';

const projectId = '980ae6723f079b773864e8867f402048';

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

const modal = createWeb3Modal({ wagmiConfig, projectId, chains });

const WalletConnectButton = () => {
  const handleConnect = async () => {
    await modal.open();
  };

  return <button onClick={handleConnect}>Connect Wallet</button>;
};

export default WalletConnectButton;


