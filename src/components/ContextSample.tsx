import React from "react";

// Titleを渡すためのContextを作成
const TitleContext = React.createContext('');

// Titleコンポーネントの中でContextの値を参照
const Title = (): JSX.Element => {
  // Consumerを使って、Contextの値を参照
  return (
    <TitleContext.Consumer>
      {(title) => {
        return (
          <h1>{ title }</h1>
        );
      }}
    </TitleContext.Consumer>
  );
};

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  );
};

const Page = () => {
  const title = 'React Book';

  // Providerを使用してContextに値を設定
  return (
    <TitleContext.Provider value={ title }>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
