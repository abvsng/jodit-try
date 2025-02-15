import "./App.css";
import { useRef } from "react";
import JoditEditor from "jodit-react";

function App() {
  const editorRef = useRef(null);

  return (
    <>
      <JoditEditor ref={editorRef} />
    </>
  );
}

export default App;
