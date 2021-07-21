import React from 'react'
import { Router } from 'react-router-dom';

import Contactenos from './components/Contactenos/index';
import './styles/GlobalStyles.css';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Contactenos />
    </Router>
  )
}

export default App;