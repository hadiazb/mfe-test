import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './Styles.module.css'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <nav className={Styles.footer__top}>
        <ul className={Styles.footer__top__items}>
          <li className={Styles.footer__top__item}>
            <Link
              className={Styles.footer__top__item__link}
              to='/'>
                Inicio
            </Link>
          </li>
          <li className={Styles.footer__top__item}>
            <Link
              className={Styles.footer__top__item__link}
              to='/'>
                Productos y Servicios
            </Link>
          </li>
          <li className={Styles.footer__top__item}>
            <Link
              className={Styles.footer__top__item__link}
              to='/'>
                Entorno Educativo
            </Link>
          </li>
          <li className={Styles.footer__top__item}>
            <Link
              className={Styles.footer__top__item__link}
              to='/'>
                Terminos y Condiciones
            </Link>
          </li>
          <li className={Styles.footer__top__item}>
            <Link
              className={Styles.footer__top__item__link}
              to='/'>
                Información del elempleo.com
            </Link>
          </li>
          <li className={Styles.footer__top__item}>
            <Link
              className={Styles.footer__top__item__link}
              to='/'>
                Trabaja con nosotros
            </Link>
          </li>
          <li className={Styles.footer__top__item}>
            <Link
              className={Styles.footer__top__item__link}
              to='/'>
                Paute con elempleo.com
            </Link>
          </li>
          <li className={Styles.footer__top__item}>
            <Link
              className={Styles.footer__top__item__link}
              to='/'>
                Contactenos, quejas y reclamos
            </Link>
          </li>
          <li className={Styles.footer__top__item}>
            <Link
              className={Styles.footer__top__item__link}
              to='/'>
                Aviso de privacidad
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={Styles.footer__middle}>
        <img
          className={Styles.footer__middle__img}
          src="https://uatazure.elempleo.com/images/logo_footer_Colombia.gif"
          alt=""
        />
        <img
          className={Styles.footer__middle__img}
          src="https://uatazure.elempleo.com/images/logo_servicio_de_empleo.gif"
          alt=""
        />
        <span className={Styles.footer__middle__span}>
          Vinculado a la red de prestadores del Servicio Público de Empleo.
          Autorizado por el Ministerio de Trabajo según resolución 000191 de 2014.
          Ver reglamento de autorización.
        </span>
        <img
          className={Styles.footer__middle__img}
          src="https://uatazure.elempleo.com/images/logoSic_m.jpg"
          alt=""
        />
      </nav>
      <span className={Styles.footer__buttom}>
        Av. Calle 26 # 68B-70 - Teléfono: (57) (1) 2940100 Ext.: 5226, 5162, 5132,
        5160 - Línea Nacional: 018000123456 - Bogotá - Colombia - Correo: info@elempleo.com.
        Copyright © 2017, Leadersearch S.A.S. elempleo.com NIT 830.065.1578.
        El portal con más y mejores ofertas de empleo, vacantes y opciones de trabajo en Colombia.
        Prohibida su reproducción total o parcial, así como su traducción a cualquier idioma sin
        autorización escrita de su titular. Todos los derechos reservados.
        Reproduction in whole or in part, or translation without written permission is prohibited.
        All rights reserved. elempleo.com El portal con las mejores ofertas de empleo de Latinoamérica
      </span>
      <p className={Styles.footer__buttom__text}>
        elempleo.com informa a todos sus usuarios y clientes que nunca realiza el envío de mensajes de
        texto o correos electrónicos para solicitar documentos, información o datos de ninguna clase.
        En caso de que usted reciba un correo electrónico de ese tipo, por favor, absténgase de responder
        y entregar cualquier tipo de información.
      </p>
      <p className={Styles.footer__buttom__text}>
        Cualquier duda, o para reportar algún caso comuníquese con nuestra línea de atención al cliente.
        Teléfono: (57) (1) 2940100 Ext.: 5162, 5226, 5160, 5132 - Línea Nacional: 018000123456 - Bogotá - Colombia - Correo: info@elempleo.com
      </p>
    </footer>
  )
}

export default Footer;