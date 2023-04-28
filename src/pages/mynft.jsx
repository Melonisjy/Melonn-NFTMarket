import MynftHeader from "../components/MynftHeader";

const Mynft = ({ myNftBalance }) => {
  return (
    <>
      <MynftHeader />
      <div className="min-h-screen bg-black">
        <div className="text-white">보유한 nft 개수: {myNftBalance}</div>
      </div>
    </>
  );
};
export default Mynft;
