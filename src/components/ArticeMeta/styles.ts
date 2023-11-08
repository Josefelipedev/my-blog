import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkerGray};
    font-style: italic;


    .categories span::after {
      content: ', ';
    }

    .categories span:last-child::after {
      content: '';
    }

    a{
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
      &:hover{
        color: ${theme.colors.primary};
      }
    }

  `};
`;
