import React, { useContext, useEffect, useMemo, useState } from 'react';
import Wallet from '@project-serum/sol-wallet-adapter';
import PropTypes from 'prop-types';
import { useConnectionConfig } from './connection';
import { useLocalStorageState } from './index';
import { notify } from './notifications';
import { SOL_WALLET_PROVIDERS } from './config';

const WalletContext = React.createContext(null);

export function WalletProvider({ children }) {
  const { endpoint } = useConnectionConfig();
  const [providerUrl, setProviderUrl] = useLocalStorageState(
    'walletProvider',
    'https://www.sollet.io',
  );
  const wallet = useMemo(() => {
    console.log('use new provider:', providerUrl, ' endpoint:', endpoint);
    return new Wallet(providerUrl, endpoint);
  }, [providerUrl, endpoint]);

  const [connected, setConnected] = useState(false);
  useEffect(() => {
    console.log('trying to connect');
    wallet.on('connect', () => {
      console.log('connected');
      setConnected(true);
      const walletPublicKey = wallet.publicKey.toBase58();
      const keyToDisplay =
        walletPublicKey.length > 20
          ? `${walletPublicKey.substring(0, 7)}.....${walletPublicKey.substring(
              walletPublicKey.length - 7,
              walletPublicKey.length,
            )}`
          : walletPublicKey;

      notify({
        message: 'Wallet update',
        description: `Connected to wallet ${keyToDisplay}`,
      });
    });
    wallet.on('disconnect', () => {
      setConnected(false);
      notify({
        message: 'Wallet update',
        description: 'Disconnected from wallet',
      });
    });
    return () => {
      wallet.disconnect();
      setConnected(false);
    };
  }, [wallet]);
  return (
    <WalletContext.Provider
      value={{
        wallet,
        connected,
        providerUrl,
        setProviderUrl,
        providerName:
          SOL_WALLET_PROVIDERS.find(({ url }) => url === providerUrl).name ||
          providerUrl,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

WalletProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useWallet() {
  const context = useContext(WalletContext);
  return {
    connected: context.connected,
    wallet: context.wallet,
    providerUrl: context.providerUrl,
    setProvider: context.setProviderUrl,
    providerName: context.providerName,
  };
}
