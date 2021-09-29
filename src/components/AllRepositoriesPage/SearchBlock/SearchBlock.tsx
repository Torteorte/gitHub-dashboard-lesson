import React from 'react';
import { StyledHeadContainer, StyledHeader } from './styled';

import { Input } from 'antd';
import { RootStateOrAny, useSelector } from 'react-redux';
const { Search } = Input;

interface props {
  handlerNameSearch: any;
}

const SearchBlock: React.FC<props> = ({ handlerNameSearch }) => {
  const {
    allRepositoriesPageReducer: { nameSearch }
  }: RootStateOrAny = useSelector((store) => store);

  const onNameSearch = (name: string) => {
    let result = `${name}+in:name`;
    if (name === nameSearch.split('+')[0]) return;
    if (name === '') {
      result = 'stars';
    }
    handlerNameSearch(result);
  };

  return (
    <StyledHeadContainer>
      <StyledHeader>List of repositories</StyledHeader>
      <Search
        placeholder="Enter repository name"
        defaultValue={nameSearch === 'stars' ? '' : nameSearch.split('+')[0]}
        onSearch={onNameSearch}
        enterButton
      />
    </StyledHeadContainer>
  );
};

export default SearchBlock;
