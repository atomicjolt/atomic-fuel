import React from 'react';
import './styles.css';
export interface Props {
    ariaOptions?: Object;
    buttonType?: ButtonType;
    children: React.ReactNode;
    classes?: string;
    color?: string;
    disabled?: boolean;
    noBold?: boolean;
    submit?: boolean;
    rest?: Object;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare enum ButtonType {
    primary = "primary",
    secondary = "secondary",
    large = "large",
    primaryLarge = "primary-large",
    small = "small",
    gray = "gray",
    icon = "icon"
}
export declare const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
