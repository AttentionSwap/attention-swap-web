import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Account, Connection } from '@solana/web3.js';
import PropTypes from 'prop-types';

import { useLocalStorageState } from './index';
import { NETWORK_ENDPOINTS } from './config';

const DEFAULT = NETWORK_ENDPOINTS[0].endpoint;

const ConnectionContext = React.createContext({
  endpoint: DEFAULT,
  setEndpoint: () => {},
  connection: new Connection(DEFAULT, 'recent'),
  sendConnection: new Connection(DEFAULT, 'recent'),
  env: NETWORK_ENDPOINTS[0].name,
  tokenMap: new Map(),
  tokens: [],
});

export function ConnectionProvider({ children }) {
  const [endpoint, setEndpoint] = useLocalStorageState(
    'connectionEndPoints',
    NETWORK_ENDPOINTS[0].endpoint,
  );

  const connection = useMemo(() => new Connection(endpoint, 'recent'), [
    endpoint,
  ]);
  const sendConnection = useMemo(() => new Connection(endpoint, 'recent'), [
    endpoint,
  ]);

  const { name: env, tokenApi } =
    NETWORK_ENDPOINTS.find((end) => end.endpoint === endpoint) ||
    NETWORK_ENDPOINTS[0];

  const [tokens, setTokens] = useState([]);
  const [tokenMap, setTokenMap] = useState(new Map());

  useEffect(() => {
    // fetch token files
    window
      .fetch(tokenApi)
      .then((res) => res.json())
      .then((list) => {
        const knownMints = list.reduce((map, item) => {
          map.set(item.mintAddress, item);
          return map;
        });

        setTokenMap(knownMints);
        setTokens(list);
      });
  }, [env]);

  useEffect(() => {
    const id = connection.onAccountChange(new Account().publicKey, () => {});
    return () => {
      connection.removeAccountChangeListener(id);
    };
  }, [connection]);

  useEffect(() => {
    const id = connection.onSlotChange(() => null);
    return () => {
      connection.removeSlotChangeListener(id);
    };
  }, [connection]);

  useEffect(() => {
    const id = sendConnection.onAccountChange(
      new Account().publicKey,
      () => {},
    );
    return () => {
      sendConnection.removeAccountChangeListener(id);
    };
  }, [sendConnection]);

  useEffect(() => {
    const id = sendConnection.onSlotChange(() => null);
    return () => {
      sendConnection.removeSlotChangeListener(id);
    };
  }, [sendConnection]);

  return (
    <ConnectionContext.Provider
      value={{
        endpoint,
        setEndpoint,
        connection,
        sendConnection,
        tokens,
        tokenMap,
        env,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
}

ConnectionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useConnection() {
  return useContext(ConnectionContext).connection;
}

export function useSendConnection() {
  return useContext(ConnectionContext).sendConnection;
}

export function useConnectionConfig() {
  const context = useContext(ConnectionContext);
  return {
    endpoint: context.endpoint,
    setEndpoint: context.setEndpoint,
    env: context.env,
    tokens: context.tokens,
    tokenMap: context.tokenMap,
  };
}
