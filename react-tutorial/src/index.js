import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Car from './components/Car';
import reportWebVitals from './reportWebVitals';
// import Garage from './components/Grage';
// import Apple from './components/Apple';
// import Car from './components/Car';
// import Header from './components/Header';
// import ChangeColour from './components/ChangeColour';
// import Scooter from './components/Scooter';
// import Timer from './components/Timer';
import Myform from './components/Myform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Garage />
    <Apple />
    <Car /> */}
    {/* <Header />
     */}
     {/* <ChangeColour /> */}
     {/* <Scooter /> */}
     {/* <Timer /> */}
     <Myform />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
