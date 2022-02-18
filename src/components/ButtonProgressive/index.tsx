import React, { ButtonHTMLAttributes, useState } from 'react';
import { ButtonStyle } from './styles';
import { useNavigate } from 'react-router';

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  title: string;
  width?: string;
  type?: 'submit' | 'reset' | 'button';
  navigation: string;
  typeButton?: string;
  isValid?: boolean;
}

export default function ButtonProgressive({
  type,
  title,
  width = '100%',
  navigation,
  isValid
}: ButtonProps) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  return (
    <ButtonStyle
      type={type}
      width={width}
      onClick={() => {
        if (!isValid) return;

        setIsActive(true);
        setTimeout(() => navigate(navigation, { replace: true }), 5000);
      }}
      className={isActive ? 'progress-btn active' : 'progress-btn'}
      data-progress-style="fill-back"
    >
      <span className="btn">{!isActive ? title : 'Finalizando...'}</span>
      <div className="progress"></div>
    </ButtonStyle>
  );
}
