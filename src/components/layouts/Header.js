/* eslint-disable max-len */
import React from 'react';
import { useConnectionConfig } from '../../utils/connection';
import { useWallet } from '../../utils/wallet';
import { shortenAddress } from '../../utils';

import { Pager, Button } from '../elements';

const Header = () => {
  const data = useConnectionConfig();

  const { wallet, connected } = useWallet();

  console.log(data);
  return (
    <header className="sticky top-0 bg-black shadow-sm z-30">
      <Pager>
        <div className="block sm:hidden md:hidden lg:hidden xl:hidden">
          <div className="flex justify-center">
            <div className="flex-none py-4 flex lg:w-60 xl:w-72">
              <h1 className="text-4xl text-white">Attention</h1>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:block lg:block xl:block">
          <div className="flex justify-between">
            <div className="flex justify-start">
              <div className="flex-none flex">
                <img src="/logo.png" alt="logo" className="h-16	py-1 mr-10" />
              </div>
              <div className="flex-none py-4 flex mr-3">
                <h1 className="text-xl text-white">Swap</h1>
              </div>
              <div className="flex-none p-4 flex mr-3">
                <h1 className="text-xl text-white">Pool</h1>
              </div>
              <div className="flex-none p-4 flex mr-3">
                <h1 className="text-xl text-white">ATTN</h1>
              </div>
              <div className="flex-none p-4 mr-3">
                <h1 className="text-xl text-white">DAO</h1>
              </div>
              <div className="flex-none p-4 flex mr-3">
                <h1 className="text-xl text-white">Charts</h1>
              </div>
            </div>
            <div className="flex justify-start">
              {connected ? (
                <>
                  <div className="flex-none py-3 flex mr-4">
                    <div className="flex-none flex p-2 bg-white rounded">
                      <p>0 ATTN</p>
                    </div>
                  </div>
                  <div className="flex-none py-3 flex mr-4">
                    <div className="flex justify-around bg-white rounded">
                      <div className="flex-none flex p-2 ">
                        <p>23.06 SOL</p>
                      </div>
                      <div className="flex-none flex rounded bg-gray-200 p-2 ">
                        <p> {shortenAddress(`${wallet.publicKey}`)}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-none py-3 flex mr-4">
                  <Button name="Connect" onClick={() => wallet.connect()} />
                </div>
              )}
              <div className="flex-none py-3 flex">
                <Button secondary name="W3 Connect" />
              </div>
            </div>
          </div>
        </div>
      </Pager>
    </header>
  );
};

export default Header;
