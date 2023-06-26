import "./App.css";
import { useCountStore } from "./Zustand/store";
import Footer from "./Components/Footer";

function App() {
  const count = useCountStore((state) => state.count);
  const name = useCountStore((state) => state.name);
  const increaseCount = useCountStore((state) => state.increaseCount);
  const decreaseCount = useCountStore((state) => state.decreaseCount);

  const resetCount = useCountStore((state) => state.resetCount);

  return (
    <>
      <p>Hello World</p>
      <p>Count From Zustand</p>
      <p> {count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
      <p>Creator Name : {name}</p>
      <hr style={{ marginTop: "400px" }}></hr>
      <Footer></Footer>
    </>
  );
}

export default App;
