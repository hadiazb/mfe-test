import React from 'react'
import { Router } from 'react-router-dom';

import Error404 from './components/Error404/index';
import './styles/GlobalStyles.css';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Error404 />
    </Router>
  )
}

export default App;