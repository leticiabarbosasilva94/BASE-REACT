import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  const error = false;
  return (
    <Nav error={error}>
      <Link to="/">Home</Link>
      <Link to="/page404">Page404</Link>
    </Nav>
  );
}
