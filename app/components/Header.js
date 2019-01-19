import react from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Doorsport</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
