import React, { useState, useRef } from "react";

const sleep = (msec: number) => {
  return new Promise((resolve) => { setTimeout(resolve, msec) });
};

const UPLOAD_DELAY = 5000;

export const ImageUploader = () => {
  // 隠されたInput要素にアクセスするためのref
  const inputImageRef = useRef<HTMLInputElement | null>(null);

  // 選択されたファイルデータを保持するref
  const fileRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string | null>('');

  // 「画像をアップロード」というテキストがクリックされた時のコールバック
  const handleClickButton = () => {
    if (inputImageRef.current !== null) {
      // inputのDOMにアクセスしてクリックイベントを発火させる
      inputImageRef.current.click();
    }
  };

  // ファイルが選択された後に呼ばれるコールバック
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null && files.length > 0) {
        // fileRef.currentに値を保存する
        // fileRef.currentが変化しても再描画は発生しない
        fileRef.current = files[0];
    }
  };

  // アップロードボタンがクリックされた時に呼ばれるコールバック
  const handleClickUpload = async () => {
    if (fileRef.current !== null) {
      // 通常はここでAPIを読んでファイルをサーバにアップロードする
      // ここでは疑似的に一定時間まつ
      await sleep(UPLOAD_DELAY);

      // アップロードが成功した旨を表示するために、メッセージを書き換える
      setMessage(`${fileRef.current?.name} has been successfully uploaded`);
    }
  };

  return (
    <div>
        <p style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleClickButton}>
          画像をアップロード
        </p>
        <input
          ref={inputImageRef}
          type="file"
          accept="image/*"
          onChange={handleChangeImage}
          style={{ visibility: 'hidden' }}
        />
        <br />
        <button onClick={handleClickUpload}>アップロードする</button>
        {message !== null && <p>{ message }</p>}
    </div>
  );
};
