import React, { FC } from 'react';

import styles from './ExampleComponent.module.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const ExampleComponent: FC<AccordionProps> = ({ title, children }) => {
  return (
    <div>
      <h3 className={styles.heading}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};
