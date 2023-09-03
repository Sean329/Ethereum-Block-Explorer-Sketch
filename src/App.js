import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState(0);
  const [trxnInfo, settrxnInfo] = useState([]);

  useEffect(() => {
    async function getBlockNumber() {
      const _blockNumber = await alchemy.core.getBlockNumber();
      setBlockNumber(_blockNumber);
      settrxnInfo((await alchemy.core.getBlockWithTransactions(_blockNumber)).transactions);
    }

    getBlockNumber();
  });


  return ( <div className="App">
            <h1>Block Number: {blockNumber}</h1>
              <ul>
                {trxnInfo.map(item => {
                  return <li>{JSON.stringify(item,null,2)}</li>;
                  })}
            </ul>
              {/* TRXN Info: {JSON.stringify(trxnInfo, null, 2)} */}
          </div>
  );
}

export default App;
