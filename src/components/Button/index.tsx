import React from 'react';
import cn from 'classnames';

import './styles.css';

export interface Props {
  ariaOptions?: Object,
  buttonType?: ButtonType,
  children: React.ReactNode,
  classes?: string,
  color?: string,
  disabled?: boolean,
  noBold?: boolean,
  submit?: boolean,
  rest?: Object,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  large = 'large',
  primaryLarge = 'primary-large',
  small = 'small',
  sort = 'sort',
  gray = 'gray',
  icon = 'icon',
}

export const Button = React.forwardRef<HTMLButtonElement, Props>((props: Props, ref) => {
  const {
    ariaOptions = {},
    children,
    classes,
    color,
    disabled = false,
    submit = false,
    noBold,
    rest,
    onClick = () => {},
  } = props;

  const buttonType = disabled ? ButtonType.gray : props.buttonType;

  const className = cn(
    'aj-btn',
    {
      [`aj-btn--${color}`]: color,
      [`aj-btn--${buttonType}`]: buttonType,
      'aj-btn--no-bold': noBold,
      [classes as string]: classes,
    },
  );

  return (
    <button
      ref={ref}
      type={submit ? 'submit' : 'button'}
      className={className}
      disabled={disabled}
      {...ariaOptions}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
