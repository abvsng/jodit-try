import "./App.css";
import { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";

function App() {
  const [theme, setTheme] = useState(false);
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState("");
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
        title="Editor theme"
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
      <button
        onClick={() => {
          setBlog(content);
        }}
        title="Submit content"
      >
        Submit
      </button>

      <div
        style={{
          margin: "auto",
          border: "solid black",
          padding: 5,
          width: 800,
        }}
        dangerouslySetInnerHTML={{ __html: blog }}
      />
    </>
  );
}

export default App;
