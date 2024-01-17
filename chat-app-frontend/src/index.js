import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import App from './App';
  import { BrowserRouter } from 'react-router-dom';
  import { ChatProvider } from './context/ChatContext';
  import { store } from './app/store';
  import { Provider } from 'react-redux';
  

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ChatProvider>
   <BrowserRouter>
      <App />
      </BrowserRouter>,
   </ChatProvider>,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );