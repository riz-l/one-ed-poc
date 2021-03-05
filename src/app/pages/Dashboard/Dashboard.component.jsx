// Import: Packages
import React from "react";

// Import: Assets
import DXCLogo from "../../../assets/img/logo/dxc.png";
import { ReactComponent as SplashImageSvg } from "../../../assets/img/header/splash.svg";

// Import: Elements
import {
  Container,
  Header,
  Splash,
  SplashImage,
  SplashWrapper,
  UserDetails,
  Wrapper,
} from "./Dashboard.elements";

// Page: Dashboard
export default function Dashboard() {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <h1>Dashboard</h1>
            <img src={DXCLogo} alt="DXC Technology" />
          </Header>

          <SplashWrapper>
            <Splash>
              <h2>Welcome to OneED</h2>
              <p>
                OneED is an application used to triage and treat Patients in an
                Emergency Department setting.
              </p>

              <SplashImage>
                <SplashImageSvg />
              </SplashImage>
            </Splash>

            <UserDetails>
              <h3>User</h3>
            </UserDetails>
          </SplashWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
