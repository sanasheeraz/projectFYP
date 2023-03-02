import { Provider } from 'react-redux';
import React from 'react';
import './App.css';
import RouterPage from './component/RouterPage';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
        <RouterPage />
    </Provider>
  );
}

export default App;
