import React from 'react'
import { Router } from 'react-router-dom';

import Ayuda from './components/Ayuda/index';
import './styles/GlobalStyles.css';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Ayuda />
    </Router>
  )
}

export default App;