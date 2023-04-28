import { Link, useParams } from "react-router-dom";
import { SlWallet } from "react-icons/sl";
import { AiOutlineDisconnect } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";

const Header = ({ account, setAccount, setMyNftBalance }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const { address } = useParams();

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
      setMyNftBalance(0);
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
          isLoading ? (
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 008-8h-4c0 2.485-.996 4.746-2.617 6.364L12 20zm3-7.709A7.962 7.962 0 0116 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"
              ></path>
            </svg>
          ) : (
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
              <Link to={`/mynft/${account}`}>
                <div className="bg-white text-black font-title text-sm p-2 ml-2 rounded-full flex justify-center items-center">
                  <button className="">my Nft</button>
                </div>
              </Link>
            </div>
          )
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
