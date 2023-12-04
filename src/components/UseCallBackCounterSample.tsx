import React, { useState, useCallback } from "react";

type ButtonProps = {
  onClick: () => void;
};

// DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props;
  console.log('DecrementButtonが再描画されました');
  return (
    <button onClick={ onClick }>Decrement</button>
  );
};

// IncrementButtonはメモ化した関数コンポーネントでボタンを表示する
const IncrementButton = React.memo<ButtonProps>((props) => {
  const { onClick } = props;
  console.log('IncrementButtonが再描画されました');
  return (
    <button onClick={ onClick }>Increment</button>
  );
});

// DoubleButtonはメモ化した関数コンポーネントでボタンを表示する
const DoubleButton = React.memo<ButtonProps>((props) => {
  const { onClick } = props;
  console.log('DoubleButtonが再描画されました');
  return (
    <button onClick={ onClick }>Double</button>
  );
});

export const Parent = () => {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    setCount((currentCount) => currentCount - 1);
  };
  const handleIncrement = () => {
    setCount((currentCount) => currentCount + 1);
  };
  // useCallBackを使って関数をmemo化する
  const handleDouble = useCallback(() => {
    setCount((currentCount) => currentCount * 2)
  // 第2引数は殻配列なので、useCallbackは常に同じ関数を返す
  }, []);

  return (
    <div>
      <p>{`Count: ${ count }`}</p>

      {/** コンポーネントに関数を渡す */}
      <DecrementButton onClick={ handleDecrement } />

      {/** メモ化コンポーネントに関数を渡す */}
      <IncrementButton onClick={ handleIncrement } />

      {/** メモ化コンポーネントにメモ化した関数を渡す */}
      <DoubleButton onClick={ handleDouble } />
    </div>
  );
};