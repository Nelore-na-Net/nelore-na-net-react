import React from 'react';
import { FooterContainer, FooterContent, LogoContainer, LogoImage, FooterText, SocialLinks, SocialLink } from './style'; // Importe os estilos necessários
import NeloreNaNet from '../../../assets/imgs/logo-nelore-na-net.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Importe os ícones do react-icons

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <LogoContainer>
                    <LogoImage src={NeloreNaNet} alt="Logo da Nelore na Net" />
                </LogoContainer>
                <FooterText>
                    Siga nossas redes sociais para ficar atualizado sobre as novidades!
                </FooterText>
                <SocialLinks>
                    <SocialLink href="https://www.facebook.com/andre.rodrigues" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </SocialLink>
                    <SocialLink href="https://twitter.com/andre_rodrigues" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/andre-rodrigues" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </SocialLink>
                </SocialLinks>
                <FooterText>
                    &copy; {new Date().getFullYear()} André Laurentino Rodrigues. Todos os direitos reservados.
                </FooterText>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
