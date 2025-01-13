import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React test project!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        määrä on {count}
        </button>
        <p>
        Muokkaa <code>src/App.jsx</code> ja tallenna HMR-testausta varten
        </p>
      </div>
      <p className="read-the-docs">
      Napsauta Vite- ja React-logoja saadaksesi lisätietoja      </p>
    </>
  )
}

export default App
