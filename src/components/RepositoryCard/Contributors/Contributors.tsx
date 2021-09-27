import React from 'react';

import {StyledContributors} from './styled'
import {useSelector} from "react-redux";

const Contributors: React.FC = () => {
    const {userPageReducer: { repositoryContributors }}: any = useSelector((store) => store);

    return (
        <StyledContributors>
            <h3>Main contributors:</h3>
            <ul>
                {!repositoryContributors ? "" : repositoryContributors.map((obj: any) =>
                    <li key={obj.id}><a href={obj.html_url}><img src={obj.avatar_url} alt="avatar_fhoto" width={50}/></a></li>
                )}
            </ul>
        </StyledContributors>
    );
};

export default Contributors;