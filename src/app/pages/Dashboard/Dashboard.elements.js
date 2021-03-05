// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  min-height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.main`
  align-items: flex-start;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 2rem);
  justify-content: flex-start;
  margin: 1rem;
  padding: 1rem;
  width: 100%;
`;

// Element: Header
export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  & h1 {
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1rem;
  }

  & img {
    max-height: 60px;
  }
`;

// Element: Splash
export const Splash = styled.div`
  align-items: flex-start;
  backdrop-filter: blur(10px);
  /* background: rgba(255, 255, 255, 0.3); */
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0)
  );
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  height: 225px;
  min-height: 225px;
  justify-content: flex-start;
  padding: 2rem;
  position: relative;
  width: 60%;

  & h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  & p {
    width: 50%;
  }
`;

// Element: SplashImage
export const SplashImage = styled.div`
  top: -40px;
  height: 100%;
  position: absolute;
  right: -150px;
  width: 100%;

  & svg {
    height: 300px;
  }
`;
