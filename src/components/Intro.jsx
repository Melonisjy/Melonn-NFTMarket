import { useEffect, useState } from "react";
import { BsCheckCircleFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

// const ranNum = Math.floor(Math.random() * 100) + 1;
// const imgSrc = `https://olbm.mypinata.cloud/ipfs/QmZFYTWVwqDmBnHjNGaA1Xoxxf4kg22RexEVdZeCnh1oKA/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const ranNum = Math.floor(Math.random() * 100) + 1;
      const newImgSrc = `https://olbm.mypinata.cloud/ipfs/QmZFYTWVwqDmBnHjNGaA1Xoxxf4kg22RexEVdZeCnh1oKA/${ranNum}.png`;
      setImgSrc(newImgSrc);
    }, 1000);

    return () => clearInterval(intervalId);
  });
  return (
    <div className="bg-white py-32 px-4 border-4 border-green-800/70 shadow-xl shadow-green-100 rounded-full mx-4">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="relative w-40 h-40">
          <img className="absolute z-10 rounded-full" src={imgSrc} alt="NFT" />
          <div className="w-40 h-40 rounded-xl bg-white text-gray-950 absolute z-0 flex justify-center items-center text-xs">
            Loading...
          </div>
        </div>
        <div className="absolute left-64 top-2">
          <div>
            <div className="font-title text-4xl font-bold flex gap-4 items-center">
              Melon Cafe
              <div className="text-green-500">
                <BsCheckCircleFill size={32} />
              </div>
              <div className="text-blakc font-extralight">|</div>
              <Link
                to="https://mumbai.polygonscan.com/address/0x1b9fb39f292bc8dE2805E2E0567C59B52725A5dE"
                target="_blank"
              >
                <button>
                  <BsSearch
                    size={20}
                    className="ml-4 opacity-50 hover:opacity-100 mb-1"
                  />
                </button>
              </Link>
            </div>
            <div className="font-display mt-2 text-gray-600">
              'Melon Cafe'는 유명 아티스트 Melon의 작품으로
              <br /> 트타벅스를 비롯해 여러 세계적인 카페 브랜드와
              <br /> 콜라보를 진행하고 있습니다. 31년 간 아티스트의
              <br /> 길을 걸은 그의 발자취를 NFT를 통해 확인해보세요.
            </div>
            <div className="font-subtitle flex gap-6 mt-4">
              <div>
                <div className="font-bold text-2xl">{totalNft}</div>
                <div className=" text-gray-600">아이템</div>
              </div>
              <div className="">
                <div className="font-bold text-2xl">{mintedNft}</div>
                <div className="text-gray-600">소유자</div>
              </div>
              {/* <div className="ml-4">
                <div className="font-bold">{myNft}</div>
                <div className="text-gray-300">내 NFT</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
