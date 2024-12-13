import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Header, LinkStyled } from '@/styles/StyledComponents/Layout.js';
import { lightTheme } from '@/styles/theme.js'

export default function Layout({ children }) {
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
      if(window.scrollY > lastScrollY && window.scrollY > 100){
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      setLastScrollY(window.scrollY)
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);

    return (
      <ThemeProvider theme={lightTheme}>
        <Header isHidden={isHidden}>
            <LinkStyled href="/">Home</LinkStyled>
            <LinkStyled href="/login">Login</LinkStyled>
            <LinkStyled href="/board">Board</LinkStyled>
        </Header>
        <Container>
          {children}
        </Container>
      </ThemeProvider>
      );
}