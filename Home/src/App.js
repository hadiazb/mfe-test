import React from 'react'
import { Router } from 'react-router-dom';

import Home from './components/Home/index';
import './styles/GlobalStyles.css';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Home />
    </Router>
  )
}

export default App;