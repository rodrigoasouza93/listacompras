import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

const Header = (props) => (
  <AppBar position="static" color="primary">
    <div className="header">
      <Link to="/">
        <p className="title text-left">Lista de Compras</p>
      </Link>
    </div>
  </AppBar>
);

export default Header;