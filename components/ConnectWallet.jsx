import { useState } from 'react';
import { TWButton } from ".";

const ADDRESSES = [
  'ADDRESS1',
  'ADDRESS2',
  'ADDRESS3',
  'ADDRESS4',
  'ADDRESS5'
]

const ConnectWallet = () => {
  const [showOptions, setShowOptions] = useState(false);
  
  const setAddress = (address) => {
    console.log(`setAddress: ${address}`);
    setShowOptions(false);
  }

  return (
    <div className='text-center relative'>
      <TWButton
        onClick={() => setShowOptions(!showOptions)}
      >
        Connect Wallet
      </TWButton>
      {showOptions && (
        <div className='absolute top-0 left-0 w-full'>
          <div 
            className='absolute top-1 right-1 text-xs font-bold border rounded-full bg-white px-2 py-1 cursor-pointer' 
            onClick={() => setShowOptions(false)}>
            X
          </div>
          {ADDRESSES.map(address => (
            <div 
              key={address} 
              className='p-3 border-b border-white bg-slate-200 cursor-pointer'
              onClick={() => setAddress(address)}
            >
              {address}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ConnectWallet;