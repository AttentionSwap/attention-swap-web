import React, { useState, useMemo, useEffect } from 'react';
import Wallet from '@project-serum/sol-wallet-adapter';
import { Connection, clusterApiUrl } from '@solana/web3.js';
import config from '../utils/config';

function WalletConnection() {
  const [isConnected, setIsConnected] = useState(false);

  const network = clusterApiUrl(config.network);
  const connection = useMemo(() => new Connection(network), [network]);
  const wallet = useMemo(() => new Wallet(config.walletProvider, network), [
    config.walletProvider,
    network,
  ]);

  useEffect(() => {
    wallet.on('connect', () => {
      setIsConnected(true);
      console.log(`Connected to wallet ${wallet.publicKey.toBase58()}`);
    });
    wallet.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from wallet');
    });
    return () => {
      wallet.disconnect();
    };
  }, [wallet]);

  console.log('connection', connection);

  if (isConnected) {
    return <div>Wallet Connected</div>;
  }

  return (
    <button
      type="button"
      className="bg-red-600 bg-opacity-100 p-5"
      onClick={() => wallet.connect()}
    >
      Connect To Wallet
    </button>
  );
}

export default WalletConnection;
