import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './styles';

interface ButtonProps {
  text: string; 
  to: string;
}

const Button: React.FC<ButtonProps> = ({ text, to }) => {
  return (
    <Link to={to}>
      <StyledButton>{text}</StyledButton>
    </Link>
  );
};

export default Button;
