import MynftHeader from "../components/MynftHeader";
import ToBeUpdated from "../components/ToBeUpdate";

const Mynft = ({ myNftBalance }) => {
  return (
    <>
      <MynftHeader />
      <div className="min-h-screen bg-black">
        <div className="text-white flex justify-start font-title p-2 pl-12">
          Number of my NFT: {myNftBalance}
        </div>
        <ToBeUpdated />
      </div>
    </>
  );
};
export default Mynft;
