import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { getLastCommit } from "git-last-commit";
import { spawn } from "child_process";

function App() {
  const [count, setCount] = useState(0)
  const gitCommand = "git rev-parse HEAD";
  const [data, setData] = useState("");
  useEffect(() => {
    Promise.all([
      fetch('/versioning.txt').then(x => x.text()),
    ]).then(([sampleResp]) => {
      setData(JSON.parse(sampleResp).commitInfo);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <pre style={{
          textAlign: 'left'
        }}>
          {data}
        </pre>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
