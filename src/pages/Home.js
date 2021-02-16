import React from 'react';
import WalletConnection from '../components/WalletConnection';

function Home() {
  return (
    <div className="container p-10">
      <header className="py-10">
        <p>Home</p>
        <WalletConnection />
      </header>
    </div>
  );
}

export default Home;
