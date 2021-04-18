import './index.scss';
import React from 'react';
import 'antd/dist/antd.css';
import App from './app/App';
import ReactDOM from 'react-dom';
import {ConfigProvider} from 'antd';
import reportWebVitals from './reportWebVitals';

import 'froala-editor/js/languages/fa.js';
import 'font-awesome/css/font-awesome.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';
import 'froala-editor/js/third_party/font_awesome.min.js';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider direction="rtl">
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
