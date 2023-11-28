import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};
  `}
`;
export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};
  `}`;

export const Logo = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;

  `}
  `;

export const OpenClose = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};
  `}`;
