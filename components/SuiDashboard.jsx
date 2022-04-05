import {
  SuiBlockchainDashboard,
  TWCenteredContent,
  TWCleanHeader
} from '.'

const SuiDashboard = () => {
  return (
    <TWCenteredContent>
      <TWCleanHeader>
        <div>
          Sui Dashboard
        </div>
      </TWCleanHeader>
      <SuiBlockchainDashboard />
    </TWCenteredContent>
  );
}

export default SuiDashboard;