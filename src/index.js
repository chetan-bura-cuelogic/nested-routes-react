import React from 'react';
// import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component'
// import { render } from 'react-snapshot';
import { hydrate, render } from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  loadableReady().then(() => {
    hydrate(<BrowserRouter><App /></BrowserRouter>, rootElement)
  })
  // hydrate(<BrowserRouter><App /></BrowserRouter>, rootElement);
} else {
  render(<BrowserRouter><App /></BrowserRouter>, rootElement);
}
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
// render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
