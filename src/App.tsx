import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
