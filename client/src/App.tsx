// src/App.tsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Setup from "./components/Setup";
import CryptoDataTable from "./components/CryptoDataTable";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Setup />
        <CryptoDataTable />
      </div>
    </Provider>
  );
};

export default App;
