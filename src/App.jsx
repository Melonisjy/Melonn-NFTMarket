import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");
  const [myNft, setMyNft] = useState(0);

  return (
    <BrowserRouter>
      <div className="bg-black">
        <Header
          account={account}
          setAccount={setAccount}
          myNft={myNft}
          setMyNft={setMyNft}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main account={account} myNft={myNft} setMyNft={setMyNft} />
            }
          />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
