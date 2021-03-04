// Import: Packages
import React from "react";
import styled from "styled-components";

// Import: Components, Pages
import { Navigation } from "./app/components";
import { Dashboard } from "./app/pages";

// Component: App
export default function App() {
  return (
    <>
      <Container>
        <Layout>
          <Nav>
            <Navigation />
          </Nav>

          <Main>
            <Dashboard />
          </Main>
        </Layout>
      </Container>
    </>
  );
}

// Element: Container
const Container = styled.div`
  align-items: center;
  background: #c9d6ff;
  background: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff);
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  display: flex;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  position: relative;
  width: 100%;
`;

// Element: Layout
export const Layout = styled.div`
  display: flex;
  height: 100%;
  min-height: 100%;
  width: 100%;
  min-width: 100%;
`;

// Element: Nav
export const Nav = styled.div`
  flex: 250px;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 250px;
`;

// Element: Main
export const Main = styled.div`
  flex: auto;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;
