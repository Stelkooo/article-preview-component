'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import Button from './button/button.component';
import Menu from './menu/menu.component';

export default function Share() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="lg:relative">
      <Button
        onClickFunc={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      <AnimatePresence>
        {isMenuOpen ? (
          <Menu onClickFunc={() => setIsMenuOpen(!isMenuOpen)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
