import React from 'react'
import { NavLink } from 'react-router-dom'

import Styles from './Styles.module.css'

const Header = () => {
  return (
    <header className={Styles.header}>
      <nav className={Styles.header__top}>
        <NavLink to='/' className={Styles.header__top__icon}>
          <p>Colombia</p>
        </NavLink>
        <ul className={Styles.header__top__items}>
          <li className={Styles.header__top__item}>
            <NavLink to='/'>Inicio</NavLink>
          </li>
          <li className={Styles.header__top__item}>
            <NavLink to='/contactenos'>Contectenos</NavLink>
          </li>
          <li className={Styles.header__top__item}>
            <NavLink to='/ayuda'>Ayuda</NavLink>
          </li>
          <li className={Styles.header__top__item}>
            <NavLink to='/'>Ir al portar de Empresas</NavLink>
          </li>
        </ul>
      </nav>
      <nav className={Styles.header__buttom}>
        <img className={Styles.header__buttom__image} src="https://uatazure.elempleo.com/images/logo-marca-2.png" alt="logo" />
        <button className={Styles.header__buttom__buttom}>Iniciar sesión</button>
      </nav>
    </header>
  )
}

export default Header;