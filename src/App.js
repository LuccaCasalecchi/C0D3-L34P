import React from "react";
import "./styles/global.css";
import Routes from "./Routess";

import {Provider} from 'react-redux';
import {store} from "./redux/store/index"

import {fetchPosts} from './actions/index'

store.dispatch(fetchPosts);

function App() {
  return (
    <Provider store = {store}>
     <Routes/>
    </Provider>
  );
}

export default App;
