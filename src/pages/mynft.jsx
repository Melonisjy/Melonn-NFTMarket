import MynftHeader from "../components/MynftHeader";
import { HiWrenchScrewdriver } from "react-icons/hi2";

const Mynft = ({ myNftBalance }) => {
  return (
    <>
      <MynftHeader />
      <div className="min-h-screen bg-black">
        <div className="text-white flex justify-start font-title p-2 pl-12">
          Number of my NFT: {myNftBalance}
        </div>
        <div className="min-h-screen flex justify-center items-center rounded-full pb-44">
          <div className="text-7xl font-display flex gap-8 text-gray-200 font-bold border-8 border-gray-200 p-20 rounded-full">
            <HiWrenchScrewdriver />
            To be updated.
          </div>
        </div>
      </div>
    </>
  );
};
export default Mynft;
