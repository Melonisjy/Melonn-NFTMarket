import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/Header";
import { useState } from "react";
import Mynft from "./pages/mynft";

function App() {
  const [account, setAccount] = useState("");
  const [myNftBalance, setMyNftBalance] = useState(0);

  return (
    <BrowserRouter>
      <div className="bg-black">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header
                  account={account}
                  setAccount={setAccount}
                  setMyNft={setMyNftBalance}
                />
                <Main
                  account={account}
                  myNftBalance={myNftBalance}
                  setMyNftBalance={setMyNftBalance}
                />
              </div>
            }
          />
          <Route
            path="/detail/:tokenId"
            element={
              <div>
                <Header
                  account={account}
                  setAccount={setAccount}
                  setMyNftBalance={setMyNftBalance}
                />
                <Detail />
              </div>
            }
          />
          <Route
            path="/mynft/:address"
            element={
              <div>
                <Mynft myNftBalance={myNftBalance} />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
