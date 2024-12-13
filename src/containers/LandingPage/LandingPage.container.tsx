import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Container, StyledButton, Title } from './LandingPage.styles.tsx';

// Define props for the component (extend as needed)
export interface LandingPageProps {
  title?: string; // Optional title for the page
}

// Functional component
const LandingPage: React.FC<LandingPageProps> = ({
  title = 'Welcome to Slyde',
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Link href="/board">
        <StyledButton>
          Check my super cool project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24px"
            height="24px"
          >
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </StyledButton>
      </Link>
    </Container>
  );
};

export default LandingPage;
