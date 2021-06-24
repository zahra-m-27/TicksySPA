import './index.scss';
import React from 'react';
import 'antd/dist/antd.css';
import App from './app/App';
import ReactDOM from 'react-dom';
import {ConfigProvider} from 'antd';
import reportWebVitals from './reportWebVitals';

import 'froala-editor/js/languages/fa.js';
import 'font-awesome/css/font-awesome.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider direction="rtl">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
