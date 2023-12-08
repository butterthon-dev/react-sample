import React, { useState, useCallback, useDebugValue } from "react";

// input向けにコールバックと現在の入力内容をまとめたフック
const useInput = () => {
  // 現在の入力値を保持するフック
  const [state, setState] = useState('');

  // inputが変化したらフック内の状態を更新する
  // useCallbackは関数のメモ化
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  // デバッグ用に値を出力する
  // 値は開発者ツールのComponentsタブに表示される
  useDebugValue(`Input: ${state}`);

  // 現在の入力内容とコールバック関数だけ渡す
  return [state, handleChange] as const;
};

export const Input = () => {
  const [text, handleChangeText] = useInput();
  return (
    <div>
      <input type="text" value={ text } onChange={ handleChangeText } />
      <p>Input: { text }</p>
    </div>
  );
};
