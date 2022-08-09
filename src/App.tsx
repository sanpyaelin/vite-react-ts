import { useCallback, useState } from 'react'
import reactLogo from 'assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => setCount((x) => x + 1), [])

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h2>
        Vite + React + Typescript + Eslint + Prettier + Husky + Airbnb
        JavaScript Style Guide
      </h2>

      <div className='card'>
        <button onClick={increment}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
