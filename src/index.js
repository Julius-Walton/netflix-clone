import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp ({
  apiKey: "AIzaSyDeLHwDzWe0TlUAV9DpX43tAMV7PGuiMe4",
  authDomain: "netflix-clone-ae132.firebaseapp.com",
  projectId: "netflix-clone-ae132",
  storageBucket: "netflix-clone-ae132.appspot.com",
  messagingSenderId: "265965437103",
  appId: "1:265965437103:web:5f8b7a7ecd6dfd4de9145a",
  measurementId: "G-R3CQMV4LSD"
});

ReactDOM.render(
  <React.StrictMode>
    <code>
    <pre>{console.log(getAnalytics(app))}</pre>
    </code>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
