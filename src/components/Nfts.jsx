import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";

const Nfts = ({ page, mintedNft }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      setNfts(); // 값이 들어있는 경우도 있으니까 초기화시킴.

      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );
        nftArray.push({ tokenId, metadata: response.data });
      }
      setNfts(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  // const onClickPage = (p) => () => {
  //   setSelectedPage(p);
  // };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`${i !== 0 && "ml-4"} ${
            i + 1 === selectedPage ? "text-white" : "text-gray-400"
          }`}
          onClick={() => {
            setSelectedPage(i + 1);
            getNfts(i + 1);
          }}
        >
          {i + 1}
        </button>
      );
    }

    return pageArray;
  };

  useEffect(() => {
    getNfts(1);
  }, []);

  useEffect(() => console.log(nfts), [nfts]);

  return (
    <div>
      <ul className=" mt-8 grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 justify-items-center px-32">
        {nfts?.map((v, i) => {
          return (
            <div
              key={i}
              className="relative my-10 hover:scale-110 transition duration-200"
            >
              {parseInt(mintedNft) < v.tokenId && (
                <div className="absolute bg-black w-full h-full bg-opacity-50 rounded-xl flex justify-center items-center text-4xl font-bold">
                  <MdOutlineDoNotDisturbOn
                    size={80}
                    className="opacity-80 text-red-500"
                  />
                </div>
              )}
              <img
                className="desktop:w-52 laptop:w-40 tablet:w-32 w-28 rounded-t-xl"
                src={v.metadata.image}
                alt={v.metadata.name}
              />
              <div className="relative bg-slate-100 rounded-b-xl desktop:w-52 laptop:w-40 tablet:w-32 w-28">
                <div className="font-display flex items-center gap-2 pt-4 px-2 font-light text-black desktop:text-sm">
                  Melon Cafe
                  <div className="text-green-500">
                    <BsCheckCircleFill />
                  </div>
                </div>
                <div className="text-base font-display px-2 font-bold pb-2">
                  Melon Cafe # {v.tokenId}
                </div>
                <Link to={`/detail/${v.tokenId}`}>
                  <button
                    className="absolute top-0 right-1 font-display text-2xl"
                    disabled={parseInt(mintedNft) < v.tokenId}
                  >
                    ⋮
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </ul>
      <div className="justify-center flex pb-8">{pageComp()}</div>
    </div>
  );
};
export default Nfts;
