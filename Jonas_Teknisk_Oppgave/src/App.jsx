import { useState } from 'react'
import Count from './assets/Components/Count'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((c) => c + 1)

  return (
    <>
      <Count title="Counter A" count={count} onIncrement={increment} />
      <Count title="Counter B" count={count} onIncrement={increment} />
      <Count title="Counter C" count={count} onIncrement={increment} />
    </>
  )
}

export default App
