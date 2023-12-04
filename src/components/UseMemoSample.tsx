import React, { useState, useMemo } from "react";

export const UseMemoSample = () => {
  const [text, setText] = useState('');

  // itemsは文字列のリストを保持する
  const [items, setItems] = useState<string[]>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // ボタンをクリックしたときに呼ばれる関数
  const handleClickButton = () => {
    setItems((currentItems) => {
      // 現在の入力値をitemsに追加する、このとき新しい配列を作成して保存する
      return [...currentItems, text];
    });

    // テキストボックスの中の値を空にする
    setText('');
  };

  // numberOfCharacters1は再描画のたびにitems.reduceを実行して結果を得る
  const numberOfCharacters1 = items.reduce((sub, item) => {
    console.log('numberOfCharacters1が呼ばれました');
    return sub + item.length;
  }, 0);

  // numberOfCharacters2はuseMemoを使い、itemsが更新されるタイミングでitems.reduceを実行して結果を得る
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => {
      console.log('numberOfCharacters2が呼ばれました');
      return sub + item.length;
    }, 0)
    // 第2引数の配列の中にitemsがあるので、itemsが新しくなった時だけ関数を実行してメモを更新する
  }, [items]);

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={ text } type="text" onChange={ handleChangeInput } />
        <button onClick={ handleClickButton }>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={ index }>{ item }</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  );
};
