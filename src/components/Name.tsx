import React from "react";

// 名前を入力するためのテキストボックスを返す
const Name = () => {
  // input要素のonChangeイベントに対するコールバック関数を定義
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 入力されたテキストをコンソールに表示します
    console.log(e.target.value);
  };

  return (
    // styleオブジェクトのキーはキャメルケース
    <div style={{padding: '16px', backgroundColor: 'grey'}}>
      <label htmlFor="name">名前</label>
      <input id="name" className="input-name" type="text" onChange={handleChange} />
    </div>
  );
};

export default Name;
