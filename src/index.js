import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import AppMain from './AppMain';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <AppMain />
//   </React.StrictMode>,
//   document.getElementById('wrap')
// );

const wrap = ReactDOM.createRoot(document.getElementById("wrap_page"));
wrap.render(
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
