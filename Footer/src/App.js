import React from 'react'
import { Router } from 'react-router-dom';

import Footer from './components/Footer/index';
import './styles/GlobalStyles.css';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Footer />
    </Router>
  )
}

export default App;