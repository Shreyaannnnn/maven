'use client'
import React from "react";
import {ethers, Contract, Provider, JsonRpcSigner} from 'ethers';
import abi from '../assets/abi.json'

const CartSummary: React.FC = () => {


  const checkout = async() =>{
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner(); 
    const contract = new ethers.Contract('0x80A6a33bdB4d236D0CF84702430B45A07BCB18a8', abi, signer);
    const priceInWei = ethers.parseEther('0.04');
    const transaction = await contract.buy({value:priceInWei, from: signer.getAddress(), gasLimit: 5000000});
    console.log(transaction);
    
  }

  return (
    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start mt-20 max-md:mt-10">
        <h2 className="text-base font-bold leading-tight text-neutral-500">
          Total:
        </h2>
        <p className="mt-5 text-3xl font-bold leading-none text-zinc-100">
          0.04 EDU
        </p>
        {/* <p className="mt-4 text-base leading-none text-neutral-500">₹799</p> */}
        {/* <p className="mt-3 text-base leading-none text-zinc-100">50% off</p> */}
        <button onClick={checkout} className="self-stretch px-16 py-5 mt-3.5 text-base font-bold leading-tight text-center text-white whitespace-nowrap bg-orange-500 rounded-lg max-md:px-5">
          Checkout
        </button>
        <div className="flex flex-col self-stretch pt-5 mt-4 w-full border-t border-gray-300">
          <h3 className="self-start text-base font-bold leading-tight text-zinc-100">
            Promotions
          </h3>
          <div className="flex gap-5 justify-between py-px pr-px pl-2.5 mt-5 w-full leading-snug rounded-lg border border-gray-300 border-dashed text-neutral-500">
            <div className="flex gap-2.5 my-auto">
              <div className="flex flex-col">
                <p className="text-sm font-bold">SKILLS4SALEB</p>
                <p className="self-start mt-2.5 text-xs">Udemy coupon</p>
              </div>
              <p className="self-start text-xs">is applied</p>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/221dab46368a7038ca1db7a748d504a13649055ce3fcdaeb6b184c1493c0d6e0?placeholderIfAbsent=true&apiKey=779eb5ea1637423490797e9103078d7f"
              alt=""
              className="object-contain shrink-0 aspect-[0.94] w-[45px]"
            />
          </div>
          <form className="flex mt-2 w-full text-sm">
            <div className="flex overflow-hidden gap-4 items-start pb-2 bg-white rounded-lg border-t border-b border-l border-zinc-100">
              <label
                htmlFor="couponInput"
                className="font-bold leading-4 text-zinc-100"
              >
                Apply <br /> coupon
              </label>
              <input
                type="text"
                id="couponInput"
                placeholder="Enter Coupon"
                className="mt-3 basis-auto text-neutral-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 font-bold leading-tight text-center text-white whitespace-nowrap bg-orange-500 rounded-none max-md:px-5"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
