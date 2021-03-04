// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.main`
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  display: flex;
  height: 100%;
  min-height: calc(100vh - 2rem);
  justify-content: center;
  margin: 1rem;
  width: 100%;
`;
