import React from 'react';
import { StyledHeadContainer } from './styled';

import { Input } from 'antd';
import { useSelector } from 'react-redux';
const { Search } = Input;

interface props {
  handlerNameSearch: any;
}

const SearchBlock: React.FC<props> = ({ handlerNameSearch }) => {
  const {
    allRepositoriesPageReducer: { nameSearch }
  }: any = useSelector((store) => store);

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
      <h2>List of repositories</h2>
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
