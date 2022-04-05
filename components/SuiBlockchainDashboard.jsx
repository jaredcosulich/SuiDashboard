import { useEffect, useState } from "react";
import { callRpc } from "../lib";
import { SuiAddress } from ".";

const SuiBlockchainDashboard = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const loadAddresses = async () => {
      const { addresses } = await callRpc('addresses')
      setAddresses(addresses);
    }

    loadAddresses();
  }, [])

  return (
    <div className='border p-6'>
      <h2 className='text-lg font-semibold'>
        SuiBlockchainDashboard
      </h2>
    
      <div className='py-6'>
        {addresses.map((address, index) => (
          <div key={`address-${index}`} className='py-3'>
            <SuiAddress address={address} />
          </div>
        ))}
      </div>
    </div>
  )

}

export default SuiBlockchainDashboard;