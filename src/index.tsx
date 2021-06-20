import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './core/store/configureStore';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import * as serviceWorker from './serviceWorker';
import { theme } from './core/theme';
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>,
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
