import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import {
  StyledLanguageItem,
  StyledLanguages,
  StyledListLanguages,
  StyledTitle
} from './styled';

export const Languages: React.FC = () => {
  const {
    userPageReducer: { repositoryLanguages }
  }: RootStateOrAny = useSelector((store) => store);

  const languages = Object.keys(repositoryLanguages).map((obj: string) => (
    <StyledLanguageItem key={obj}>{obj}</StyledLanguageItem>
  ));

  return (
    <StyledLanguages>
      <StyledTitle>Used languages:</StyledTitle>
      <StyledListLanguages>
        {languages.length !== 0 ? languages : 'No languages used.'}
      </StyledListLanguages>
    </StyledLanguages>
  );
};
