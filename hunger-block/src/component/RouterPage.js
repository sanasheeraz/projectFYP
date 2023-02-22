import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { pages_route_list } from '../utils/pages_route_list';

const RouterPage = () => {
  return (
    <div>
      <Router>
        <Routes>
          {
            React.Children.toArray(pages_route_list.map((elem) => {
              const { linkTo, element } = elem
              return <Route element={element} path={linkTo} />
            }))
          }
        </Routes>
      </Router>

    </div>
  )
}

export default RouterPage
