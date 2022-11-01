import styled from "styled-components";

export const StyledCard = styled.section`
  display: flex;
  gap: 32px;
`;

export const StyledPhoto = styled.img`
  border-radius: 8px;
  object-fit: cover;
`;

export const StyledArticle = styled.article`
  margin-top: 16px;
`;

export const StyledContainer = styled.article`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledCountryName = styled.span`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.black900};
`;

export const StyledGoogleMapsLink = styled.a`
  color: ${({ theme }) => theme.colors.black500};
  padding-left: 8px;
`;

export const StyledHeader = styled.h2`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.black900};
  font-size: 32px;
`;

export const StyledDateRange = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black900};
  margin-top: 16px;
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.black900};
  margin-top: 8px;
`;
