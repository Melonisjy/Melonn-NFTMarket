import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GoSettings } from "react-icons/go";
import { MdOutlineDescription } from "react-icons/md";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const Detail = () => {
  const [metadata, setMetadata] = useState();
  const [owner, setOwner] = useState();
  const { tokenId } = useParams();

  const getOwner = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.ownerOf(tokenId).call();

      setOwner(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  useEffect(() => {
    getOwner();
  }, [tokenId]);

  useEffect(() => {
    console.log(metadata);
  }, [metadata]);

  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      {metadata && (
        <div id="info" className="flex">
          <div>
            <img
              src={metadata.image}
              alt="{metadata.name}"
              className="w-full rounded-2xl mt-12"
            />
          </div>
          <div>
            <div>
              <div className="m-20 font-subtitle">
                <div className="text-2xl text-gray-400">Melon Cafe</div>
                <div className="text-4xl font-semibold">{metadata.name}</div>
                <div id="owner" className="flex mt-2">
                  <div className="text-gray-500">Owner</div>
                  <div className="text-base ml-2">
                    {/* {owner.substring(0, 4)}....{owner.substring(owner.length - 4)} */}
                    {owner}
                  </div>
                </div>
              </div>
              <div className="m-20 border border-white font-subtitle rounded-3xl">
                <div className="p-4">
                  <div className="flex items-center mb-8">
                    <IoInformationCircleOutline size={26} />
                    <div className="text-2xl ml-2 font-semibold">
                      Information
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MdOutlineDescription />
                    <div className="text-xl font-semibold ml-2">
                      Description
                    </div>
                  </div>
                  <div className="w-fit px-3 p-1 bg-slate-900 rounded-xl flex justify-center mt-2 mb-4">
                    <div className="text-gray-200">{metadata.description}</div>
                  </div>
                  <div className="flex items-center">
                    <GoSettings />
                    <div className="text-xl font-semibold ml-2">Property</div>
                  </div>
                  <ul className="flex mt-2">
                    {metadata.attributes.map((v, i) => {
                      return (
                        <li key={i}>
                          <div className="mr-4 w-fit p-3 bg-slate-900 rounded-xl">
                            <div className="text-sm font-light">
                              {v.trait_type}
                            </div>
                            <div className="text-lg font-medium mt-2">
                              {v.value}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
