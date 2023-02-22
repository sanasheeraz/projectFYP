import React from 'react'
import {BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Home from '../pages/Home';
import Shop from '../pages/shop';

const RouterPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default RouterPage
