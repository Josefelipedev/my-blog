import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HeadingStyled } from '../Heading/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

const wrapperChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? 0 : '-32rem'};
  overflow-y: ${menuVisible ? 'auto' : 'hidden'};


  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? 0 : '-34rem'}; ;

  }

`;

export const Wrapper = styled.nav<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    overflow-y: auto;

    ${wrapperChanger(menuVisible, theme)}
  `}
`;
export const Nav = styled.nav`
  margin: auto;
  width: 100%;
`;

export const Logo = styled.nav`
  ${({ theme }) => css`
    ${HeadingStyled} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xlarge};
      color: ${theme.colors.white};

      img {
        border: 0.5rem solid ${theme.colors.secondary};
      }
    }
  `};
`;

const buttonChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '26rem' : '2rem'};
  color: ${menuVisible ? theme.colors.secondary : theme.colors.white};



  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? '26rem' : '-0.2rem'}; ;

  }

`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    ${buttonChanger(menuVisible, theme)}
    transition: all 300ms ease-in-out;
  `}

`;
