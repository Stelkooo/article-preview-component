'use client';

import { useState } from 'react';

import Button from './button/button.component';
import Menu from './menu/menu.component';

export default function Share() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="lg:relative">
      <Button isLight onClickFunc={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen ? (
        <Menu onClickFunc={() => setIsMenuOpen(!isMenuOpen)} />
      ) : null}
    </div>
  );
}
