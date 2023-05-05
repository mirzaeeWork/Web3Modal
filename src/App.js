import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal, useWeb3ModalTheme } from '@web3modal/react'
import { configureChains, createClient, useAccount, useDisconnect, useSigner, WagmiConfig } from 'wagmi'
import { mainnet, polygon, polygonMumbai, goerli } from 'wagmi/chains'
import { Web3Button, Web3NetworkSwitch } from '@web3modal/react'
import { getDefaultProvider } from 'ethers'
import { useDebugValue, useEffect } from 'react'
import { useState } from 'react'
import { useWeb3Modal } from "@web3modal/react";
import { ethers } from 'ethers'
import Connecte from './connect'




const chains = [mainnet, polygon, polygonMumbai, goerli]
const projectId = '70e70886ff47fe49ed23fbddf877d7b7'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)



function App() {
  // const { address, isConnected } = useAccount()
  // const {data:signer}=useSigner()
  // const {disconnect}=useDisconnect()




  const { setTheme } = useWeb3ModalTheme()
  setTheme({
    themeMode: 'dark',
    themeVariables: {
      '--w3m-font-family': 'Roboto, sans-serif',
      '--w3m-accent-color': '#F5841F'
      // ...
    }
  })

  // useEffect(() => {
  //   console.log(ethereumClient)
  //   const account = ethereumClient.getAccount()
  //   if (account.address) {
  //     const { chainId } = ethereumClient.getNetwork();
  //     setAccount(account.address)
  //     setNetwork(chainId)
  //   }
  //   ethereumClient.watchAccount(async (account) => {
  //     if (account.address) {
  //       setAccount(account.address)
  //     } else {
  //       setAccount('')
  //     }
  //   })
  // }, [])

  // useEffect(() => {


  // }, [])


  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Web3Button />
        <Web3NetworkSwitch />
        <Connecte/>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
export default App;




























{/* // import { ethers } from "ethers";
// import { Web3Provider } from '@ethersproject/providers'
// import Web3Modal from "web3modal";
// import { EthereumProvider } from '@walletconnect/ethereum-provider'


//  const providerOptions = { */}
{/* //   EthereumProvider: { */ }
{/* //     package: EthereumProvider,
//   }
// };

// function App() { */}


{/* //   async function connectWallet() { */ }
{/* try {
      const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions // required
      });

      const provider = await web3Modal.connect();
      const library = new Web3Provider(provider)
      const accounts = await library.listAccounts();
      console.log(accounts)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}

export default App; */}


















// import { useWeb3Modal } from "@web3modal/react";
// import { useWeb3ModalTheme } from '@web3modal/react'

// const { theme, setTheme } = useWeb3ModalTheme()

// const { isOpen, open, close, setDefaultChain } = useWeb3Modal();

// // Modal's open state
// isOpen;

// // Open modal
// interface Options {
//   route?: "Account" | "ConnectWallet" | "Help" | "SelectNetwork";
// }
// await open(options?: Options);

// // Close modal
// close();

// // Sets the default chain BEFORE user is connected.
// // Use wagmi network get / switch action AFTER user is connected.
// // Default chain will be `mainnet` or first wagmi chain in config if `mainnet` is not available.
// setDefaultChain(polygon);

// theme

// // Set modal theme
// setTheme({
//   themeMode: 'dark',
//   themeVariables: {
//     '--w3m-font-family': 'Roboto, sans-serif',
//     '--w3m-accent-color': '#F5841F'
//     // ...
//   }
// })