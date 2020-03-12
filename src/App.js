import React from 'react';
import './App.css';
import store from './store/index'

import InputMirror from "./components/inputMirror/InputMirror"

function App() {
  return (
    <div className="App">
      <InputMirror store={store}/>
    </div>
  );
}

export default App;
