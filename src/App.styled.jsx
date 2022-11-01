import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 64px auto;
`;

export const StyledHorizontalRuler = styled.hr`
  border-color: ${({ theme }) => theme.colors.white500};
  margin: 24px 0;
`;
