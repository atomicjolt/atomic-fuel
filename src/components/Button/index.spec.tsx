import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button, ButtonType } from '.';

describe('Button component', () => {
  const renderComponent = (onClick = () => {}) => {
    const ariaOptions = {
      'aria-label': 'survey options',
      'aria-haspopup': 'menu',
      'aria-expanded': false,
    };

    return render(
      <Button
        ariaOptions={ariaOptions}
        color="gray"
        buttonType={ButtonType.icon}
        onClick={onClick}
      >
        Click
      </Button>,
    );
  };
  it('Should match default snapshot', () => {


    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should click the button', () => {
    const onClick = jest.fn();
    renderComponent(onClick);
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalled();
  });
});
