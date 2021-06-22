import React from 'react';
import cn from 'classnames';

import './styles.scss';

export interface Props {
  classOverride?: string,
  classes?: string,
  title: string,
  subtitle?: string,
  blank?: boolean,
  children?: React.ReactNode,
}

export default function Card(props: Props) {
  const {
    classOverride,
    classes,
    title,
    subtitle,
    blank,
    children,
  } = props;

  const baseClass = classOverride || 'aj-card';

  return (
    <div className={cn(baseClass, classes)}>
      { !blank &&
        <>
          <div className={`${baseClass}__heading`}>
            <h1 className={`${baseClass}__heading-title`}>{title}</h1>
            <h2 className={`${baseClass}__heading-subtitle`}>{subtitle}</h2>
          </div>
          <section className={`${baseClass}__content`}>
            {children}
          </section>
        </> }
      { blank && <>{children}</> }
    </div>
  );
}
