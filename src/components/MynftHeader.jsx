import { Link } from "react-router-dom";

const MynftHeader = () => {
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
    </header>
  );
};
export default MynftHeader;
