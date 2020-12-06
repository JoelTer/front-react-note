import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(
//     <App notes={notes}/>, 
//     document.getElementById('root')
//   )

// ReactDOM.render(
//   <React.StrictMode>
//     <App counter={counter}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />, 
//   document.getElementById('root'))
// }

// setInterval(() => {
//   refresh();
//   counter += 1;
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
