import React, { useState } from 'react';

const MetamaskButton = () => {
  const [account, setAccount] = useState(null);

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('User rejected Metamask connection');
      }
    } else {
      alert('Please install Metamask!');
    }
  };

  return (
    <button
      onClick={connectMetamask}
      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
    >
      {account ? `Connected: ${account.slice(0,6)}...${account.slice(-4)}` : 'Connect Metamask'}
    </button>
  );
};

export default MetamaskButton;
