import styled from "styled-components";

export const StyledNavigation = styled.nav`
  background: ${({ theme }) => theme.colors.redOrange};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 55px;
`;

export const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 16px;
`;
