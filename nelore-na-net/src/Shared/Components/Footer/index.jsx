import React from 'react';
import { FooterContainer, FooterContent, LogoContainer, LogoImage, FooterText, SocialLinks, SocialLink } from './style';
import NeloreNaNet from '../../../assets/imgs/logo-nelore-na-net.png';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <LogoContainer>
                    <LogoImage src={NeloreNaNet} alt="Logo da Nelore na Net" />
                </LogoContainer>
                <FooterText>
                    &copy; {new Date().getFullYear()} Nelore Na Net. Todos os direitos reservados.
                </FooterText>
                <SocialLinks>
                    <SocialLink href="https://www.facebook.com/andre.rodrigues" target="_blank" rel="noopener noreferrer">Facebook</SocialLink>
                    <SocialLink href="https://twitter.com/andre_rodrigues" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/andre-rodrigues" target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
                </SocialLinks>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
