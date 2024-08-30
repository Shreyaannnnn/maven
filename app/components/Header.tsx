 'use client'
import React, {useState, useEffect} from "react";
import { ethers, Provider } from 'ethers';
declare var ethereum: any;

const Header: React.FC = () => {

  const [walletConnected, setWalletConnected] = useState(false)
    const [isConnected, setIsConnected] = useState(false);
    const [signer, setSigner] = useState('')
  const [provider, setProvider] = useState('')
  const [contract, setContract] = useState('')
  const [accountAddress, setAccountAddress] = useState<Provider | {}>({});


    useEffect(() => {
        checkMetaMask();
      }, []);


      const checkMetaMask = async () => {
        if (typeof (window as any).ethereum !== 'undefined') {
          const provider = new ethers.BrowserProvider((window as any).ethereum);
          try {
            const accounts = await provider.listAccounts();
            const signer = provider.getSigner()
            const wallet = await (await signer).getAddress()
            // await wallet
            setSigner(wallet)
            if (accounts.length > 0) {
              setIsConnected(true);
              setAccountAddress(accounts[0]); 
              // console.log(accountAddress);
              // console.log(accounts[0]);   

              const network = await provider.getNetwork();


              if(network.chainId !== BigInt(656476)){

              await (window as any).ethereum.request(
                {
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0xa045c' }],
                }
            );
          }
              
              
              
            } else {
              setIsConnected(false);
            }
          } catch (error) {
            console.error('Error checking MetaMask connection:', error);
            setIsConnected(false);
          }
        } else {
          setIsConnected(false);
        }
      };
      
      


      const connectWallet = async () => {
        try {
          await ethereum.request({ method: 'eth_requestAccounts' });
          checkMetaMask();
        } catch (error) {
          console.error('Error connecting MetaMask:', error);
        }
      };


  return (
    <header className="flex flex-wrap gap-5 justify-between px-16 py-3 w-full text-base bg-neutral-800 max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/390527af2983f86e76dc4beca709a5c8a09ee94e4e9a18c8283eb14b28e5e0bf?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
        alt="Maven House logo"
        className="object-contain shrink-0 my-auto max-w-full aspect-[2.17] w-[113px]"
      />
      <nav className="flex flex-wrap gap-10 max-md:max-w-full">
        <div className="flex flex-auto gap-9 my-auto text-white">
          <a href="#plans" className="basis-auto">
            Plans & Pricing
          </a>
          <a href="#teach" className="basis-auto">
            Teach On Maven House
          </a>
        </div>
        {isConnected?
        (<button className="gap-2 self-stretch px-6 py-4 font-medium tracking-wide leading-loose text-white bg-orange-500 rounded-[50px] max-md:px-5">
          {`${signer.slice(0, 3)}....${signer.slice(-3)}`}
        </button>)
      :
      (<button onClick={connectWallet} className="gap-2 self-stretch px-6 py-4 font-medium tracking-wide leading-loose text-white bg-orange-500 rounded-[50px] max-md:px-5">
        Connect Wallet
      </button>)}
        
      </nav>
    </header>
  );
};

export default Header;
