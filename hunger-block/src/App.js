import { Provider, useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import './App.css';
import RouterPage from './component/RouterPage';
import store from './store/store';
import { ReactSession } from 'react-client-session';
import { get_session_storage, get_rest_session_storage } from './utils/interact';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {

    const data = get_session_storage()
    console.log(data)
    const rest_data =get_rest_session_storage()

    if(data){
      dispatch({
        type:"SET_USER_DATA",
        payload:data
      })
    }
    if(rest_data){
      dispatch({
        type: "SET_REST_DATA",
        playload:rest_data
      })
    }

  }, [])
  const state = useSelector(state =>state)
  console.log({state});
  ReactSession.setStoreType("localStorage");
  return (
   
    <>
    <RouterPage />

<ToastContainer autoClose={5000} />
    </>
        
   
  );
}

export default App;
