import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = ({user}) => (
  <header className='header'>
    {console.log(user)}
    <Link to='/'>
      <img className='header__img' src={logo} alt='logo header' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='' />
        <p>{user.email}</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><Link to='/login'>Iniciar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

const mapStateToProps = state => ({
  user: state.user
})
export default connect(mapStateToProps, null)(Header);
