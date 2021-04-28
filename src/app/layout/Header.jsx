import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../utils/theme';
import { NavLink } from "react-router-dom";
import { FaUserCircle, FaCode, FaEnvelope, FaBook } from 'react-icons/fa'

import Grid from '../components/Grid'
import Column from '../components/Column'

const Navbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  
  background-color: transparent;
  position: relative;
  z-index: 30;
  min-height: 3.25rem;
  
  @media screen and (min-width: 1024px) {
    align-items: stretch;
  }
`;

const NavbarEnd = styled.div`
  justify-content: flex-end;
  margin-left: auto;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: stretch;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(props => <NavLink {...props} activeClassName="active" />)`
  padding: 20px 0;
  font-size: large;
  align-items: center;
  color: #333;

  &:hover {
    cursor: pointer;
  }
`;

const PageLink = styled(props => <NavLink {...props} activeClassName="active" />)`
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
  @include transition(.3s ease-in-out);

  &.active {
    color:  ${theme.colors.active_color};
    font-weigth: bold;
  }

  &:not(.active) {
    color: #333;
  }

  &:hover {
    color:  ${theme.colors.active_color};
    pointer: cursor;
  }

  @media only screen and (max-width: 1199px) {
    margin: 0;
  }
`;

const NavbarIcon = styled.span`
  margin-right: 5px;
  font-size: 1.15em;
`;

const NavGroup = styled.ul`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

const NavGroupItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: ${theme.spacing.md};

  @media only screen and (max-width: 1199px) {
    display: block;
    margin-right: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.sm};
    width: 100%;
    padding: 20px;

    &:first-child {
      margin-top: 100px;
    }
  }
`;

const MobileNavGroup = styled.ul`
  align-items: center;
  display: ${props => (props.isMobileMenuVisible ? 'flex' : 'none')};
  flex-direction: column;
  height: 100vh;
  width: 25vw;
  position: absolute;
  top: 0;
  right: 0;
  margin-bottom: ${theme.spacing.sm};
  font-size: 18px;
  text-align: center;
  z-index: 5;
  box-shadow: -5px 5px 40px 5px rgba(0,0,0,0.5);
  background: #FFF;

  @media only screen and (max-width: 767px) {
    width: 40vw;
    font-size: 12px;
  }

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

const MobileNavGroupIcon = styled.button`
  position: absolute;
  top: ${theme.spacing.sm};
  right: ${theme.spacing.sm};
  z-index: 1009;
  padding: 15px;
  background: none;
  border: none;

  @media only screen and (min-width: 1200px) {
    display: none;
  }

  &::before,
  &::after {
    transition: all 0.2s linear;
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background-color: ${theme.colors.black};
  }

  &::before {
    margin-bottom: ${props => (!props.isOpen ? '15px' : 0)};
    transform: ${props => (props.isOpen ? 'translateY(3px) rotate(45deg)' : undefined)};
  }

  &::after {
    transform: ${props => (props.isOpen ? 'translateY(3px) rotate(-45deg)' : undefined)};
  }
`;

const navlinks = [
  { id: 0, name: 'About Me', to: '/about', icon: <FaUserCircle /> },
  { id: 1, name: 'Blog', to: '/blog', icon: <FaBook /> },
  { id: 2, name: 'Projects', to: '/projects', icon: <FaCode /> },
  { id: 3, name: 'Contact', to: '/contact', icon: <FaEnvelope /> },
]


export const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <Navbar>
      <Grid>
        <Column centered largeMonitor={12} computer={12} tablet={12} mobile={12}>
          <FlexWrapper>
            <Logo to="/">
              <span><b>Luuk.</b></span>
            </Logo>

            <NavbarEnd>
              <NavGroup>
                {navlinks.map(nlink => (
                  <NavGroupItem key={nlink.id}>
                    <PageLink to={nlink.to}>
                      <NavbarIcon>
                        {nlink.icon}
                      </NavbarIcon>
                      {nlink.name}
                    </PageLink>
                  </NavGroupItem>
                ))}
              </NavGroup>

              <div>
                <MobileNavGroup
                  isMobileMenuVisible={isMobileMenuVisible}
                >
                  {navlinks.map(nlink => (
                    <NavGroupItem key={nlink.id}>
                      <PageLink to={nlink.to} onClick={() => setMobileMenuVisibility(!isMobileMenuVisible)}>
                        <NavbarIcon>
                          {nlink.icon}
                        </NavbarIcon>
                        {nlink.name}
                      </PageLink>
                    </NavGroupItem>
                  ))}

                </MobileNavGroup>
                <MobileNavGroupIcon
                  isOpen={isMobileMenuVisible}
                  onClick={() => setMobileMenuVisibility(!isMobileMenuVisible)}
                />
              </div>
            </NavbarEnd>
          </FlexWrapper>
        </Column>
      </Grid>
    </Navbar >
  )
}

export default Header;
