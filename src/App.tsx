import P5Component from "./P5Component";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  return (
    <>
  <h1>{greet("World")}</h1>
  <P5Component />
    </>);
}

export default App;
