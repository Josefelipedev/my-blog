import * as Styled from './styled';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { LogoLink } from 'components/LogoLink';
import { MenuLink } from 'components/MenuLink';
import { useState } from 'react';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: string;
};

export const Menu = ({ links, blogName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((prevState) => !prevState);
  };

  return (
    <>
      <Styled.OpenClose
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        menuVisible={menuVisible}
        onClick={handleMenuClick}
      >
        {menuVisible && <CloseIcon aria-label="Close Menu" />}

        {!menuVisible && <MenuIcon aria-label="Open Menu" />}
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} srcImg={logo} />
          </Styled.Logo>
          {links.map((item) => (
            <MenuLink key={item.id} link={item.link} newTab={item.newTab}>
              {item.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
