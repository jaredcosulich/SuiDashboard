import { useCallback, useEffect, useState } from "react";
import { callRpc } from "../lib";
import { TWButton, SuiAddress } from ".";

const SuiBlockchainDashboard = () => {
  const [addresses, setAddresses] = useState([]);

  const loadAddresses = useCallback(async () => {
    try {
      const { addresses } = await callRpc('addresses')
      setAddresses(addresses);          
    } catch (e) {
      console.log("Error loading addresses", e);
    }
  }, [])

  useEffect(() => {
    loadAddresses();
  }, [loadAddresses])

  const sendCommand = async (command, body) => {
    try {
      const result = await callRpc(command, 'POST', body)
      console.log("COMMAND RESULT", result)  
      return result;
    } catch (e) {
      console.log("Error sending command", e);
    }
  }

  return (
    <div className='border p-6'>
      <h2 className='text-lg font-semibold'>
        SuiBlockchainDashboard
      </h2>

      <div className='py-3'>
        <TWButton
          onClick={async () => {
            await sendCommand('sui/start');
            loadAddresses();
          }}
        >
          Start Sui
        </TWButton>
        &nbsp;
        <TWButton
          onClick={() => sendCommand('sui/stop')}
        >
          Stop Sui
        </TWButton>
        &nbsp;
        <TWButton
          onClick={async () => {
            const { addresses } = await sendCommand(
              'sui/genesis', 
              {"custom": false}
            )
            setAddresses(addresses);
          }}
        >
          Sui Genesis
        </TWButton>
      </div>
    
      <div className='py-3'>
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