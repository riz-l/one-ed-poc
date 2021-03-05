// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  backdrop-filter: blur(10px);
  /* background: rgba(255, 255, 255, 0.3); */
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
`;

// Element: Header
export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
`;

// Element: Logo
export const Logo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & span {
    font-size: 2rem;
    font-weight: 600;
  }
`;

// Element: NavSection
export const NavSection = styled.div`
  align-items: center;
  /* align-items: flex-start; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem 2rem 2rem;
  width: 100%;
  max-width: 100%;
`;

// Element: NavHeading
export const NavHeading = styled.span`
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  font-weight: 600;
`;

// Element: Grid
export const Grid = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.8rem;
  width: 100%;
`;

// Element: GridItem
export const GridItem = styled.div`
  align-items: center;
  align-self: auto;
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  /* margin-bottom: 0.8rem; */
  margin-bottom: 1rem;
  order: 0;
  width: 50%;
`;

// Element: OptionIcon
export const OptionIcon = styled.div`
  background: #585ce5;
  border-radius: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  padding: 0.7rem;
  transition: all 100ms linear;

  & svg {
    fill: #ffffff;
    height: 30px;
    width: 30px;
  }
`;

// Element: Option
export const Option = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 100ms linear;

  & span {
    font-size: 0.7rem;
  }

  &:hover {
    & ${OptionIcon} {
      background: #4145d1;
      box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
      transition: all 100ms linear;
    }
  }
`;
