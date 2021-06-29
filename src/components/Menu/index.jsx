import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useListenOutsideClick } from '../common/hooks';
import './style.css';
export default function Menu(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeClass = menuOpen ? 'is-active' : '';
  const { renderChildren } = props;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const onKeyPress = (e) => {
    if ('keyCode' in e && e.keyCode === 13) {
      closeMenu();
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { ref: menuRef } = useListenOutsideClick(closeMenu);

  return renderChildren(
    activeClass,
    closeMenu,
    menuOpen,
    menuRef,
    onKeyPress,
    toggleMenu,
  );
}

Menu.propTypes = {
  renderChildren: PropTypes.func.isRequired,
};
