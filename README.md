# Ethereum Block Explorer


Blockexplorers give us the ability to view lots of different information about the blockchain including data about:
  * the blockchain network itself
  * blocks in the blockchain
  * transactions in a block
  * accounts
  * and many other things
  
[Etherscan](https://etherscan.io/) is a good example of an Ethereum blockexplorer. Check it out to get familiar with how blockexplorers generally work.


## Start the webserver

`npm start`

Running the command above will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The webpage will automatically reload when you make code changes.

## More ideas to think about

- Connecting the dots.
  - Allow users to click on a block listed in the webpage to get the block's details including its list of transactions
  - From the list of transactions allow users to click on specific transactions to get the details of the transaction
- Make an accounts page where a user can look up their balance or someone else's balance

## Supercharge your blockexplorer using AlchemySDK's specialized APIs

By using the AlchemySDK you can really supercharge your projects with additional API functionality that isn't included in the `ethers.js` package including:
  * NFT methods
  * WebSocket methods
  * Alchemy's Transact API functionality
  * endpoints for using Alchemy's Notify Webhooks

Read more about the above in the [Alchemy SDK Surface docs](https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview?a=eth-bootcamp). Using the SDK can implement the following features?

- Given a contract address and token id, can you get the NFT's metadata?
- What is the floor price of an NFT right now?
- Did a pending transaction get mined?
- What transfers did an address receive this year?

Good luck and have fun!
