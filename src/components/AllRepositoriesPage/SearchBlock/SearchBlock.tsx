import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { StyledHeadContainer, StyledHeader, StyledSearch } from './styled';

interface props {
  handlerNameSearch: (name: string) => void;
}

export const SearchBlock: React.FC<props> = ({ handlerNameSearch }) => {
  const {
    allRepositoriesPageReducer: { nameSearch }
  }: RootStateOrAny = useSelector((store) => store);

  const onNameSearch = (name: string) => {
    // результат поиска конкретно по имени репозитория
    let result = `${name}+in:name`;
    if (name === nameSearch.split('+')[0]) {
      return;
    }
    if (name === '') {
      result = 'stars';
    }
    handlerNameSearch(result);
  };

  return (
    <StyledHeadContainer>
      <StyledHeader>List of repositories</StyledHeader>
      <StyledSearch
        placeholder="Enter repository name"
        defaultValue={nameSearch === 'stars' ? '' : nameSearch.split('+')[0]}
        onSearch={onNameSearch}
        enterButton
      />
    </StyledHeadContainer>
  );
};
