import React from 'react';
import { useSelector } from 'react-redux';
import {
  StyledLanguageItem,
  StyledLanguages,
  StyledListLanguages,
  StyledTitle
} from './styled';

export const Languages: React.FC = () => {
  const {
    userPageReducer: { repositoryLanguages }
  }: any = useSelector((store) => store);

  const languages = Object.keys(repositoryLanguages).map((obj: any) => (
    <StyledLanguageItem key={obj}>{obj} |</StyledLanguageItem>
  ));

  return (
    <StyledLanguages>
      <StyledTitle>Used languages:</StyledTitle>
      <StyledListLanguages>{languages}</StyledListLanguages>
    </StyledLanguages>
  );
};
