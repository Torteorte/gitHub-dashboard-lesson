import React from 'react';
import { StyledContainerPagination } from './styled';
import { Pagination } from 'antd';
import { RootStateOrAny, useSelector } from 'react-redux';

interface props {
  changePage: (name: unknown) => void;
}

export const PaginationBlock: React.FC<props> = ({ changePage }) => {
  const {
    allRepositoriesPageReducer: { listRepositories, pageSearch, isLoaded }
  }: RootStateOrAny = useSelector((store) => store);

  const onChangePage = (number: unknown) => {
    changePage(number);
  };

  const totalCountNumber = () => {
    if (listRepositories) {
      let count = listRepositories.total_count;
      if (count > 1000) {
        count = 1000;
      }
      return count;
    }
  };

  return (
    <StyledContainerPagination>
      <Pagination
        current={Number(pageSearch)}
        total={!isLoaded ? 1 : totalCountNumber()}
        showSizeChanger={false}
        onChange={onChangePage}
      />
    </StyledContainerPagination>
  );
};
