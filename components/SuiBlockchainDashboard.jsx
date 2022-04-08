import ConnectWallet from "./ConnectWallet";

const SuiBlockchainDashboard = () => {
  
  return (
    <div className='border p-6 text-center'>
      <h2 className='text-lg font-semibold'>
        SuiBlockchainDashboard
      </h2>
    
      <div className='py-3'>
        <ConnectWallet />
      </div>
    </div>
  )

}

export default SuiBlockchainDashboard;