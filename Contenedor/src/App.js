import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom';

import HeaderApp from './components/Header';
import FooterApp from './components/Footer';
import Error404App from './components/Error404';
import HomeApp from './components/Home';
import ContactenosApp from './components/Contactenos';
import AyudaApp from './components/Ayuda';
import Breadcrumb from './components/Breadcrumb'

import Styles from './styles/App.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <HeaderApp />
          <Breadcrumb />
          <Switch>
            <Route path='/' exact component={HomeApp}/>
            <Route path='/contactenos' exact component={ContactenosApp}/>
            <Route path='/ayuda' exact component={AyudaApp}/>
            <Route path='/*' component={Error404App}/>
          </Switch>
          <FooterApp/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;