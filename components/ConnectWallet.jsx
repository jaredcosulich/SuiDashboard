import { useEffect, useState } from 'react';
import store from 'store2';
import { TWButton } from ".";

const ADDRESSES = [
  "7f45d364b50c6c8d600c61132a1b3491d4b0c8a4",
  "31339406378f66bf9800840abbf6f4c2213fbd4f",
  "645c7782600ae14a4120224a8cf68ed0e0e58e6f",
  "c92232c295c67a987af7de1baec98859f4a08915",
  "01b1987823e03166c19fc177c70b44723983383f"
]

const ConnectWallet = ({ onConnect }) => {
  const [showOptions, setShowOptions] = useState(false);
  
  const setAddress = (address) => {
    store.namespace('wallet')('address', address);
    setShowOptions(false);
  }

  useEffect(() => {
    const address = store.namespace('wallet')('address');
    if (address) {
      onConnect(address);
    }
  }, [onConnect])

  const addressName = (address) => {
    const name = store.namespace(address)('name')
    if (name) {
      return (
        <div className='text-sm'>
          {name}
          <div className='text-xs text-slate-400'>
            {address}
          </div>
        </div>
      )
    }

    return address;
  }

  return (
    <div className='text-center relative' style={{ width: '330px' }}>
      <TWButton
        onClick={() => setShowOptions(!showOptions)}
      >
        Connect Wallet
      </TWButton>
      {showOptions && (
        <div className='absolute top-12 left-0 w-full bg-white border border-black'>
          <div 
            className='absolute top-1 right-1 text-xs font-bold border rounded-full bg-white px-2 py-1 cursor-pointer' 
            onClick={() => setShowOptions(false)}>
            X
          </div>
          <div className='py-3'>
            Select An Addresses
          </div>
          {ADDRESSES.map(address => (
            <div 
              key={address} 
              className='p-3 border-b border-slate-400 cursor-pointer text-xs overflow-hidden'
              onClick={() => setAddress(address)}
            >
              
              {addressName(address)}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ConnectWallet;