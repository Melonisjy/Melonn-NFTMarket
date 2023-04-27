import { Link } from "react-router-dom";
import { SlWallet } from "react-icons/sl";
import { AiOutlineDisconnect } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";

const Header = ({ account, setAccount, myNft, setMyNft }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickDisconnect = async () => {
    try {
      setAccount("");
      setMyNft(0);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLoading = async () => {
    try {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="py-4 px-8 flex justify-between items-center font-bold bg-black w-full">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img
            src="/images/melonn_logo.png"
            alt="logo"
            className="w-10 rounded-full"
          />
          <div className="ml-1 text-white text-3xl font-bold font-title">
            Melonn
          </div>
        </div>
      </Link>
      <div className="flex items-center">
        {account ? (
          <div className="flex ">
            <div className="p-2 bg-white rounded-s-xl ml-1 text-black text-sm flex justify-center items-center gap-2 px-2 font-title">
              <VscAccount />
              {account.substring(0, 4)}....
              {account.substring(account.length - 4)}
            </div>
            <button
              className="p-2 bg-white rounded-e-xl ml-1 text-black flex justify-center items-center gap-2 px-2"
              onClick={() => {
                onClickDisconnect();
                onClickLoading();
              }}
            >
              <AiOutlineDisconnect />
              <div className="font-title">Disconnect</div>
            </button>
            {isLoading && (
              <p className="text-black bg-white text-xs font-title rounded-full flex justify-center items-center ml-2">
                Connecting
              </p>
            )}
          </div>
        ) : (
          <button
            className="p-2 bg-white rounded-xl ml-1 text-black flex justify-center items-center gap-2 px-2"
            onClick={() => {
              onClickAccount();
              onClickLoading();
            }}
          >
            <SlWallet />
            <div className="font-title">Connect wallet</div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
