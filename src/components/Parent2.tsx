import React, { memo, useState } from "react";

type FizzProps = {
 isFizz: boolean;
};

// Fizzは通常の関数コンポーネント
// isFizzがtrueの場合はFizzと表示し、それ以外は何も表示しない
// isFizzの変化に関わらず、親が再描画されるとFizzも再描画される
const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log(`Fizzが再描画されました, isFizz=${isFizz}`);
  return (
    <span>{ isFizz ? 'Fizz' : '' }</span>
  );
};

type BuzzProps = {
  isBuzz: boolean;
  onClick: () => void;
};

// Buzzはメモ化したコンポーネント
// isBuzzがtrueの場合はBuzzと表示し、それ以外は何も表示しない
// 親コンポーネントが再描画されても、isBuzzが変化しない限りはBuzzは再描画しない
const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props;
  console.log(`Buzzが再描画されました, isBuzz=${isBuzz}`);
  return (
    <span onClick={ onClick }>{ isBuzz ? 'Buzz' : '' }</span>
  );
});

// この形式でexportした時はimport { Parent } from ... で読み込む
export const Parent = () => {
  const [count, setCount] = useState(0);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  // この関数はPArentの再描画のたびに作成される
  const handleBuzzClick = () => {
    console.log(`Buzzがクリックされました isBuzz=${ isBuzz }`)
  };

  console.log(`Parentが再描画されました, count=${count}`);
  return (
    <div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>+1</button>
      <p>{ `現在のカウント: ${count}` }</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={handleBuzzClick} />
      </p>
    </div>
  );
};

