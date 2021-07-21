import React from 'react'
import { Router } from 'react-router-dom';

import Header from './components/Header/index';
import './styles/GlobalStyles.css';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Header />
    </Router>
  )
}

export default App;