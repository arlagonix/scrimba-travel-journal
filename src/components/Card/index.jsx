import locationIcon from "../../assets/icon-location.svg";
import {
  StyledCard,
  StyledPhoto,
  StyledHeader,
  StyledArticle,
  StyledDateRange,
  StyledContainer,
  StyledDescription,
  StyledCountryName,
  StyledGoogleMapsLink,
} from "./index.styled";

export default function Card(props) {
  return (
    <StyledCard>
      <StyledPhoto
        src={props.imageUrl}
        alt={props.imageAlt}
        width="200"
        height="300"
        draggable={false}
      />
      <StyledArticle>
        <StyledContainer>
          <img
            src={locationIcon}
            alt="Icon of the location"
            width="20"
            height="16"
            draggable={false}
          />
          <StyledCountryName>{props.location}</StyledCountryName>
          <StyledGoogleMapsLink href={props.googleMapsUrl}>
            View on Google Maps
          </StyledGoogleMapsLink>
        </StyledContainer>
        <StyledHeader>{props.title}</StyledHeader>
        <StyledDateRange>
          <time>{props.startDate}</time> - <time>{props.endDate}</time>
        </StyledDateRange>
        <StyledDescription>{props.description}</StyledDescription>
      </StyledArticle>
    </StyledCard>
  );
}
