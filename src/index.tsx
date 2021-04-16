import './index.scss';
import React from 'react';
import 'antd/dist/antd.css';
import App from './app/App';
import ReactDOM from 'react-dom';
import {ConfigProvider} from 'antd';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider direction="rtl">
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
