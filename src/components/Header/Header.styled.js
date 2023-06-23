import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: linear-gradient(
            114.99deg,
            #471ca9 -0.99%,
            #5736a3 54.28%,
            #4b2a99 78.99%);;
 
`;

export const StyledNavList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 30px;
    font-weight: 900;
    height: 100%;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #8165C1;

  &.active {
    color: #EBD8FF;
  }
`;

