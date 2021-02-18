/* eslint-disable max-len */
import React from 'react';

import { Pager, Button } from '../elements';

const Header = () => (
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
            <div className="flex-none py-3 flex mr-4">
              <Button name="Connect" />
            </div>
            <div className="flex-none py-3 flex">
              <Button secondary name="W3 Connect" />
            </div>
          </div>
        </div>
      </div>
    </Pager>
  </header>
);

export default Header;
