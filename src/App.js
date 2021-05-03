import { useSelector, useDispatch } from 'react-redux'
import actions from './actions'
import './App.css';


const App = () => {
  const counter = useSelector(state => state.counter.count)

  const dispatch = useDispatch()

  return (
    <>
      <h1>{counter}</h1>
      <div>
      <button onClick={() => dispatch(actions.counterActions.increment())}>Add</button>
      <button onClick={() => dispatch(actions.counterActions.decrement())}>Remove</button>
      </div>
    </>
  );
}

export default App;
