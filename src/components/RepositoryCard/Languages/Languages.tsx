import React from 'react';

import {StyledLanguages} from './styled'
import {useSelector} from "react-redux";

const Languages: React.FC = () => {
    const {userPageReducer: { repositoryLanguages }}: any = useSelector((store) => store);

    const languages = Object.keys(repositoryLanguages).map((obj: any) => (
        <li key={obj}>{obj}</li>
    ))

    return (
        <StyledLanguages>
            <h3>Used languages:</h3>
            <ul>{languages}</ul>
        </StyledLanguages>
    );
};

export default Languages;