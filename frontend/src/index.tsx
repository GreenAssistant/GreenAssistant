import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './theme-context';

// window.addEventListener('click', function(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     console.log('Koordinaten des geklickten Pixels: (' + x + ', ' + y + ')');
// });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeContextProvider>
       <Main/>
    </ThemeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
