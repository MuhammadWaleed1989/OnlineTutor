import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./layout/Ltr/Default/full/assets/css/bootstrap.min.css";
import "./layout/Ltr/Default/full/assets/css/bootstrap_limitless.min.css";
import "./layout/Ltr/Default/full/assets/css/layout.min.css";
import "./layout/Ltr/Default/full/assets/css/components.min.css";
import "./global_assets/css/icons/icomoon/styles.min.css";
import "./layout/Ltr/Default/full/assets/css/colors.min.css";
import "./layout/Ltr/Default/full/assets/css/color-style.css";
import "./layout/Ltr/Default/full/assets/css/responsive.css";
import "./layout/Ltr/Default/full/assets/css/rsmenu-main.css";
import "./layout/Ltr/Default/full/assets/css/rsmenu-transitions.css";
import "./layout/Ltr/Default/full/assets/css/nav_style.css";
import "./layout/Ltr/Default/full/assets/css/MultiSearchSelect.css";




import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
