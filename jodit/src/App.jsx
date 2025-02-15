import "./App.css";
import { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";

function App() {
  const [theme, setTheme] = useState(false);
  const [content, setContent] = useState("");
  const editorRef = useRef(null);
  const config = useMemo(
    () => ({
      height: 400,
      placeholder: "Start typing...",
      theme: theme ? "dark" : "light",
    }),
    [theme]
  );

  return (
    <>
      <button
        onClick={() => {
          setTheme((p) => !p);
        }}
      >
        {theme ? "Dark" : "Light"}
      </button>
      <JoditEditor
        ref={editorRef}
        config={config}
        value={content}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
    </>
  );
}

export default App;
