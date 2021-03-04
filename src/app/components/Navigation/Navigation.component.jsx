// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as WardEDOverviewIcon } from "../../../assets/img/icon/hospital.svg";
import { ReactComponent as WardDashboardIcon } from "../../../assets/img/icon/speedometer.svg";
import { ReactComponent as PatientOverviewIcon } from "../../../assets/img/icon/patient-patient.svg";
import { ReactComponent as PatientCASIcon } from "../../../assets/img/icon/patient-cas.svg";
import { ReactComponent as PatientSaveIcon } from "../../../assets/img/icon/patient-save.svg";
import { ReactComponent as PatientCancelIcon } from "../../../assets/img/icon/patient-cancel.svg";
import { ReactComponent as AssessmentsTriageIcon } from "../../../assets/img/icon/assessments-triage.svg";
import { ReactComponent as AssessmentsObservationsIcon } from "../../../assets/img/icon/heart-monitor.svg";
import { ReactComponent as AssessmentsSeenIcon } from "../../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as AssessmentsClinicalIcon } from "../../../assets/img/icon/assessments-clinical.svg";
import { ReactComponent as AssessmentsViewIcon } from "../../../assets/img/icon/assessments-view.svg";
// import { ReactComponent as TrainingClinicalIcon } from "../../../assets/img/icon/training-clinical.svg";

// Import: Elements
import {
  Container,
  Header,
  Logo,
  Grid,
  GridItem,
  NavHeading,
  NavSection,
  Option,
  OptionIcon,
} from "./Navigation.elements";

// Component: Navigation
export default function Navigation() {
  return (
    <>
      <Container>
        <Header>
          <Logo>
            <span>OneED</span>
          </Logo>
        </Header>

        {/* Ward */}
        <NavSection>
          <NavHeading>Ward</NavHeading>
          <Grid>
            <GridItem>
              <Option>
                <OptionIcon>
                  <WardDashboardIcon />
                </OptionIcon>
                <span>Dashboard</span>
              </Option>
            </GridItem>

            <GridItem>
              <Option>
                <OptionIcon>
                  <WardEDOverviewIcon />
                </OptionIcon>
                <span>ED Overview</span>
              </Option>
            </GridItem>
          </Grid>
        </NavSection>

        {/* Patient */}
        <NavSection>
          <NavHeading>Patient</NavHeading>
          <Grid>
            <GridItem>
              <Option>
                <OptionIcon>
                  <PatientOverviewIcon />
                </OptionIcon>
                <span>Overview</span>
              </Option>
            </GridItem>

            <GridItem>
              <Option>
                <OptionIcon>
                  <PatientCASIcon />
                </OptionIcon>
                <span>CAS Card</span>
              </Option>
            </GridItem>

            <GridItem>
              <Option>
                <OptionIcon>
                  <PatientSaveIcon />
                </OptionIcon>
                <span>Save</span>
              </Option>
            </GridItem>

            <GridItem>
              <Option>
                <OptionIcon>
                  <PatientCancelIcon />
                </OptionIcon>
                <span>Cancel</span>
              </Option>
            </GridItem>
          </Grid>
        </NavSection>

        {/* Assessments */}
        <NavSection>
          <NavHeading>Assessments</NavHeading>
          <Grid>
            <GridItem>
              <Option>
                <OptionIcon>
                  <AssessmentsTriageIcon />
                </OptionIcon>
                <span>Triage</span>
              </Option>
            </GridItem>

            <GridItem>
              <Option>
                <OptionIcon>
                  <AssessmentsObservationsIcon />
                </OptionIcon>
                <span>Observations</span>
              </Option>
            </GridItem>

            <GridItem>
              <Option>
                <OptionIcon>
                  <AssessmentsSeenIcon />
                </OptionIcon>
                <span>Seen</span>
              </Option>
            </GridItem>

            <GridItem>
              <Option>
                <OptionIcon>
                  <AssessmentsClinicalIcon />
                </OptionIcon>
                <span>Clinical Notes</span>
              </Option>
            </GridItem>

            <GridItem>
              <Option>
                <OptionIcon>
                  <AssessmentsViewIcon />
                </OptionIcon>
                <span>View Seen</span>
              </Option>
            </GridItem>
          </Grid>
        </NavSection>

        {/* Training */}
        {/* <NavSection>
          <NavHeading>Training</NavHeading>
          <Grid>
            <GridItem>
              <Option>
                <OptionIcon>
                  <TrainingClinicalIcon />
                </OptionIcon>
                <span>Clinical Guidelines</span>
              </Option>
            </GridItem>
          </Grid>
        </NavSection> */}
      </Container>
    </>
  );
}
