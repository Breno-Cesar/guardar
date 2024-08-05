import React from 'react';
import Button from '../../components/Button';
import { HomePageContainer, ButtonContainer  } from './styles';

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <h1>Home Page</h1>
      <ButtonContainer>
        <Button text="Go to Contact" to="/ContactUs" />
        <Button text="Go to Blog" to="/Blog" />
        <Button text="Go to Case" to="/Case" />
      </ButtonContainer>
    </HomePageContainer>
  );
};
