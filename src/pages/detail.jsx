import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [metadata, setMetadata] = useState();
  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `https://olbm.mypinata.cloud/ipfs/QmR7bHyprjwkmDyaq5rxKUc5RoiKatfAocQwNayaHkPLBY/${tokenId}.json`
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
    console.log(metadata);
  }, [metadata]);

  return (
    <div>
      {metadata && (
        <>
          <img src={metadata.image} alt="{metadata.name}" />
          <div>{metadata.name}</div>
          <div>{metadata.description}</div>
          <ul>
            {metadata.attributes.map((v, i) => {
              return (
                <li key={i}>
                  <div>{v.trait_type}</div>
                  <div>{v.value}</div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Detail;
