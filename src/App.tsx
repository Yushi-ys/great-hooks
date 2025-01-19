import useCopyText from "./hooks/useCopyText";
import "./index.css";

function App() {
  const { copy } = useCopyText('123')
  return <div>Great Hooks
    <button onClick={copy}>点击复制</button>
  </div>;
}

export default App;
