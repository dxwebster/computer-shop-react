import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './styles';
import { useNavigate } from 'react-router';

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  title: string;
  width?: string;
  type?: 'submit' | 'reset' | 'button';
  navigation: string;
}

export default function ButtonNavigation({ type, title, width = '100%', navigation }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <ButtonStyle
      type={type}
      width={width}
      onClick={() => navigate(navigation, { replace: true })}
      data-progress-style="fill-back"
    >
      <span className="btn">{title}</span>
      <div className="progress"></div>
    </ButtonStyle>
  );
}
