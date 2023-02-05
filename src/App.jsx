import { useState } from 'react'
import './App.css'
import AdvicePanel from './components/AdvicePanel'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AdvicePanel/>
    </div>
  )
}

