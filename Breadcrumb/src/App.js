import React from 'react'
import { Router } from 'react-router-dom';

import Breadcrumb from './components/Breadcrumb/index';
import './styles/GlobalStyles.css';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Breadcrumb />
    </Router>
  )
}

export default App;