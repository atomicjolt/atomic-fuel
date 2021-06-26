import React from 'react';
import './styles.css';
export interface Props {
    classOverride?: string;
    classes?: string;
    title: string;
    subtitle?: string;
    blank?: boolean;
    children?: React.ReactNode;
}
export default function Card(props: Props): JSX.Element;
