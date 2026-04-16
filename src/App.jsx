import "./App.css";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "./Components/Available Players/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = fetch("/players.json");
  return (await res).json();
};

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(9000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter((ply) => ply.name !== p.name);
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + p.price);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="max-w-[1200] w-11/12 mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle
            ? "Available"
            : `Selected Players(${purchasedPlayers.length}/6)`}
        </h1>

        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 border border-gray-400 border-r-0 rounded-l-2xl ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available players
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 border border-gray-400 border-r-0 rounded-r-2xl ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            <span>Selected ({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <AvailablePlayers
            setPurchasedPlayers={setPurchasedPlayers}
            purchasedPlayers={purchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
