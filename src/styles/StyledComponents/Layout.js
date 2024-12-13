import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.primaryBackground};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  height: 120px;
  background: ${({ theme }) => theme.primaryWhite};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;

  ${({ isHidden }) =>
    isHidden &&
    css`
      transform: translateY(-100%);
      box-shadow: none;
    `}
`;

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.1rem;
  margin-right: 30px;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.textSecondary};
    transform: scale(1.05);
  }

  &:active {
    color: ${({ theme }) => theme.highlight};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryWhite};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.cardShadow};
  width: 300px;
  margin-top: 20px;
`;
