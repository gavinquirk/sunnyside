import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary.headerBlue};
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral.white};

  img {
    position: absolute;
    z-index: -1;
    left: 0px;
    top: 0px;
  }

  h1 {
    font-size: 75px;
    margin-top: 100px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  span {
    font-size: 24px;
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
    padding: 10px 20px;
  }
`;
