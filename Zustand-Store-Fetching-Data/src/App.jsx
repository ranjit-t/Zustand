import "./App.css";
import { useCountStore } from "./Zustand/store";
import Footer from "./Components/Footer";
import { useEffect } from "react";

function App() {
  const count = useCountStore((state) => state.count);
  const name = useCountStore((state) => state.name);
  const increaseCount = useCountStore((state) => state.increaseCount);
  const decreaseCount = useCountStore((state) => state.decreaseCount);
  const games = useCountStore((state) => state.games);
  const gamesData = useCountStore((state) => state.gamesData);

  const resetCount = useCountStore((state) => state.resetCount);

  useEffect(() => {
    console.log(games);
  }, [games]);

  useEffect(() => {
    async function getData() {
      try {
        const resp = await fetch(
          `https://api.rawg.io/api/games?key=96849a4be84a4737a01cbd7872367e94`
        );
        const data = await resp.json();

        gamesData(data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <>
      <p>Hello World</p>
      <p>Count From Zustand</p>
      <p> {count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
      <p>Creator Name : {name}</p>
      <p>{JSON.stringify(games, null, 2)}</p>
      <hr style={{ marginTop: "400px" }}></hr>
      <Footer></Footer>
    </>
  );
}

export default App;
