import "./App.css";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "./Components/Available Players/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense, use, useState } from "react";

const fetchPlayers = async () => {
  const res = fetch("/players.json");
  return (await res).json();
};

function App() {
  const playersPromise = fetchPlayers();
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Navbar></Navbar>

      <div className="max-w-[1200] w-11/12 mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">Available players</h1>

        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className="py-3 px-4 border border-gray-400 border-r-0 rounded-l-2xl bg-[#E7FE29]"
          >
            Available players
          </button>
          <button
            onClick={() => setToggle(false)}
            className="py-3 px-4 border border-gray-400 border-l-0 rounded-r-2xl"
          >
            Selected <span>0</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
