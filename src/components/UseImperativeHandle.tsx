import React, { useState, useRef, useImperativeHandle} from "react";

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null);

  // useImperativeHandleで親のrefから参照できる値を指定
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date();
      const message = `Hello, it's ${date.toLocaleString()} now`;
      setMessage(message);
    },
  }));

  return (
    <div>
      {message !== null ? <p>{ message }</p> : null}
    </div>
  );
});

export const Parent = () => {
  const childRef = useRef<{ showMessage: () => void }>(null);
  const handleClick = () => {
    if (childRef.current !== null) {
        // 子のuseImperativeHandleで指定した値を参照
        childRef.current.showMessage();
    }
  };

  return (
    <div>
      <button onClick={ handleClick }>Show Message</button>
      <Child ref={ childRef } />
    </div>
  );
};