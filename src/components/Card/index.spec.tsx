
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';

describe('Card component', () => {
  it('Should match default snapshot', () => {
    const { asFragment } = render(
      <Card
        title="Survey Process"
        subtitle="Step 1 of 2"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should not match default snapshot when classOverride prop is added', () => {
    const { asFragment: defaultFragment } = render(
      <Card
        title="Survey Process"
        subtitle="Step 1 of 2"
      />,
    );

    const { asFragment: modifiedFragment } = render(
      <Card
        title="Survey Process"
        subtitle="Step 1 of 2"
        classOverride="aj-huge-card"
      />,
    );

    expect(defaultFragment()).not.toEqual(modifiedFragment());
  });

  it('Should not match default snapshot when classes prop is added', () => {
    const { asFragment: defaultFragment } = render(
      <Card
        title="Survey Process"
        subtitle="Step 1 of 2"
      />,
    );

    const classes = 'material-card a-box';
    const { asFragment: modifiedFragment } = render(
      <Card
        title="Survey Process"
        subtitle="Step 1 of 2"
        classes={classes}
      />,
    );

    expect(defaultFragment()).not.toEqual(modifiedFragment());
  });

  it('Should render children', () => {
    render(
      <Card
        title="Survey Process"
        subtitle="Step 1 of 2"
      >
        <div>恵</div>
      </Card>,
    );

    expect(screen.getByText('恵')).toBeTruthy();
  });

  it('Should not render content if blank property is true', () => {
    const { asFragment } = render(
      <Card
        title="Survey Process"
        subtitle="Step 1 of 2"
        blank
      >
        <div data-testid="grace">恵</div>
      </Card>,
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.queryByText(/survey process/i)).toBeFalsy();
    expect(screen.getByTestId('grace')).toBeTruthy();
  });
});
