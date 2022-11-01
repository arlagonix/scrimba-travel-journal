import worldIcon from "../../assets/icon-world.svg";
import { StyledNavigation, StyledHeader } from "./index.styled";

export default function Navigation() {
  return (
    <StyledNavigation>
      <img src={worldIcon} alt="Icon of the globe" width="24" height="24" draggable={false} />
      <StyledHeader>my travel jounal.</StyledHeader>
    </StyledNavigation>
  );
}
