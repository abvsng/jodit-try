import "./App.css";
import { useMemo, useState } from "react";
import JoditEditor from "jodit-react";

function App() {
  const [theme, setTheme] = useState(false);
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState("");
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
        config={config}
        value={content}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
      <button
        onClick={() => {
          setBlog(content);
          fetch("http://localhost:3000/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              blogContent: content, // Sending the blog HTML content
            }),
          })
            .then((res) => {
              return res.text();
            })
            .then((res) => {
              alert(`Message is : ${res}`);
            });
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
