import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, incrementByNumber} from './features/counter/counterSlice'

function App() {

  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        Counter Value is {count}
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(incrementByNumber(2))}>BygivenNum</button>
      </div>
    </>
  )
}

export default App
