import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import { useAccount, useConnect, useDisconnect ,useSigner} from 'wagmi'
import { ethers } from 'ethers'


const client = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
})


export default function Connecte() {
    const { address, isConnected } = useAccount()
    const { data: signer } = useSigner()
    const { disconnect } = useDisconnect()

    return (
        <WagmiConfig client={client}>
            {isConnected && <>
                <button
                  onClick={()=>{
                    signer?.sendTransaction({
                      to:"0x81b81F0D2e475252709362Cd8DCFb2119c169b86",
                      value:ethers.utils.parseEther('0.01')
                    })
                  }}
                >
                    Donate 0.01 Eth
                </button>
                <button onClick={() => disconnect()}>
                    {address}
                </button>

            </>}
        </WagmiConfig>
    )

}
