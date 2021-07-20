import React from 'react';
import Rlogo from '../../images/react-movie-logo.svg';
import Tlogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";




const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={Rlogo} alt='rmdb-logo' />
            <TMDBLogoImg src={Tlogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;
