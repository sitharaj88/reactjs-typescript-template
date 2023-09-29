import "./App.css";
import React from "react";
import Home from "./view/pages/home";
import { Provider } from "react-redux";
import store from "./core/store/createStore";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
};

export default App;
