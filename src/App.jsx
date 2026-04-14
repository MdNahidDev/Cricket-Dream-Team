import "./App.css";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "./Components/Available Players/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense } from "react";

const fetchPlayers = async () => {
  const res = fetch("/players.json");
  return (await res).json();
};

function App() {
  const playersPromise = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>

      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
