import { useState } from "react";
import { SuiAddress } from ".";
import ConnectWallet from "./ConnectWallet";

const SuiBlockchainDashboard = () => {
  const [walletAddress, setWalletAddress] = useState();

  const onConnect = (walletAddress) => {
    setWalletAddress(walletAddress);
  }

  return (
    <div className='border p-6 text-center'>
      <h2 className='text-lg font-semibold'>
        SuiBlockchainDashboard
      </h2>
    
      <div className='py-3'>
        <ConnectWallet onConnect={onConnect} />
      </div>

      {walletAddress && (
        <div className='py-3'>
          <SuiAddress address={walletAddress} />
        </div>
      )}
    </div>
  )

}

export default SuiBlockchainDashboard;