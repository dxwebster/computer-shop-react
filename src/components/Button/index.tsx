import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: string;
  isProgressive: boolean;
}

export default function Button({ children, width = '100%', isProgressive, ...props }: ButtonProps) {
  return (
    <Container
      width={width}
      className={isProgressive ? 'progress-btn active' : ''}
      data-progress-style="fill-back"
      {...props}
    >
      <span>{!isProgressive ? children : 'Finalizando...'}</span>
      <div className="progress"></div>
    </Container>
  );
}
