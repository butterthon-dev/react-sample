import { useReducer } from "react";

// reducerが受け取るactionの型を定義
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

// 現在の状態とactionに基づいて次の状態を返す
const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'INCREMENT':
      return currentCount + 1;
    case 'DECREMENT':
      return currentCount - 1;
    case 'DOUBLE':
      return currentCount * 2;
    case 'RESET':
      return 0;
    default:
      return currentCount;
  }
};

type CounterProps = {
  initialValue: number;
};

const Counter = (props: CounterProps) => {
  const { initialValue } = props;
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <span>{ count }</span>
      <button onClick={() => { dispatch('DECREMENT') }}>-</button>
      <button onClick={() => { dispatch('INCREMENT')}}>+</button>
      <button onClick={() => { dispatch('DOUBLE')}}>×2</button>
      <button onClick={() => { dispatch('RESET')}}>Reset</button>
    </div>
  );
};

export default Counter;
