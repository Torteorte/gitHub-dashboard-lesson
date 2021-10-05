import React from 'react';
import {
  Redirect
  // useParams
} from 'react-router-dom';
import { StyledUserPageContainer } from './styled';
import { ROUTES } from '../../common/routes/routes';
import { RootStateOrAny, useSelector } from 'react-redux';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { ProfilePageMainInfo } from './ProfilePageMainInfo/ProfilePageMainInfo';
import { ProfilePageOtherInfo } from './ProfilePageOtherInfo/ProfilePageOtherInfo';

export const ProfilePage: React.FC = () => {
  const {
    authReducer: { isAuth }
  }: RootStateOrAny = useSelector((store) => store);

  // // @ts-ignore
  // const { idMainUser } = useParams();
  // console.log(idMainUser);

  if (!isAuth) {
    return <Redirect to={ROUTES.login} />;
  }

  return (
    <StyledUserPageContainer>
      <ProfilePageHeader />
      <ProfilePageMainInfo />
      <ProfilePageOtherInfo />
    </StyledUserPageContainer>
  );
};
