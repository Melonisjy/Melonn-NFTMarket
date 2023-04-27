import { Link } from "react-router-dom";
import { SlWallet } from "react-icons/sl";
import { AiOutlineDisconnect } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

const Header = ({ account, setAccount, myNft, setMyNft }) => {
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

  return (
    <header className="py-4 px-8 flex justify-between items-center font-bold bg-white">
      <Link to="/">
        <div className="flex justify-center items-center">
          <div className="ml-1 text-green-700 text-3xl font-bold font-title">
            Melonn
          </div>
          <div className="ml-2 font-subtitle font-medium text-2xl">NFT</div>
        </div>
      </Link>
      <div className="flex items-center">
        {account ? (
          <div className="flex">
            <div className="p-2 bg-green-700 rounded-s-xl ml-1 text-white text-sm flex justify-center items-center gap-2 px-2 font-display">
              <VscAccount />
              {account.substring(0, 4)}....
              {account.substring(account.length - 4)}
            </div>
            <button
              className="p-2 bg-green-700 rounded-e-xl ml-1 text-white flex justify-center items-center gap-2 px-2"
              onClick={onClickDisconnect}
            >
              <AiOutlineDisconnect />
              <div className="font-display">Disconnect</div>
            </button>
          </div>
        ) : (
          <button
            className="p-2 bg-green-700 rounded-full ml-1 text-white flex justify-center items-center gap-2 px-2"
            onClick={onClickAccount}
          >
            <SlWallet />
            <div className="font-display">Connect</div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
