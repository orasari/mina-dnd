import styled from 'styled-components';

// Define a styled component for container styling with a gradient background
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
`;

// Define a styled component for the main content
export const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

// StyledButton as a <div>
export const StyledButton = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  margin-top: 20px;
  background-color: #ff6a00;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #ff8c42;
    transform: translateY(-2px);
  }

  svg {
    margin-left: 10px;
    font-size: 1.5rem;
  }
`;

