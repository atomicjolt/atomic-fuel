import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from '.';

/* eslint-disable react/prop-types */
const MockChild = (props) => {
  const {
    activeClass,
    closeMenu,
    menuRef,
    toggleMenu,
  } = props;

  return (
    <div className={activeClass}>
      <button id="buttonToggle" onClick={toggleMenu}>
        Open
      </button>
      <ul ref={menuRef}>
        <li>
          Menu Item
        </li>
        <li>
          <button id="buttonClose" onClick={closeMenu}>
            Close
          </button>
        </li>
      </ul>
    </div>
  );
};

describe('Menu component', () => {

  const renderComp = () => render(
    <Menu renderChildren={(activeClass, closeMenu, menuOpen, menuRef, toggleMenu) => (
      <MockChild
        activeClass={activeClass}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        menuOpen={menuOpen}
        menuRef={menuRef}
      />
    )}
    />);

  it('Should match snapshot when given renderChildren prop', () => {
    const { asFragment } = renderComp();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should open the menu', () => {
    renderComp();
    fireEvent.click(screen.getByText('Open'));
    expect(screen.queryByText('Menu Item')).toBeTruthy();
  });
});
