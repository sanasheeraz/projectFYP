import { Provider } from 'react-redux';
import React from 'react';
import './App.css';
import RouterPage from './component/RouterPage';
import store from './store/store';
import { ReactSession } from 'react-client-session';


function App() {
  ReactSession.setStoreType("localStorage");
  return (
    <Provider store={store}>
        <RouterPage />
    </Provider>
  );
}

export default App;
