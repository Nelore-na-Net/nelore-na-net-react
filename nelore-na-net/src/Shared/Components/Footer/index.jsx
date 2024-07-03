import React from 'react';
import { FooterContainer, FooterContent, LogoContainer, LogoImage, FooterText, SocialLinks, SocialLink, FormContainer, InputField, SubmitButton, LoginLink } from './style'; // Importe os estilos necessários
import NeloreNaNet from '../../../assets/imgs/logo-nelore-na-net.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Importe os ícones do react-icons

const Footer = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        // Lógica para inscrever na newsletter
        alert('Inscrição na newsletter realizada com sucesso!');
    };

    return (
        <FooterContainer>
            <FooterContent>
                <LogoContainer>
                    <LogoImage src={NeloreNaNet} alt="Logo da Nelore na Net" />
                </LogoContainer>
                <FooterText>
                    Siga a Nelore na Net no Facebook e Instagram!
                </FooterText>
                <SocialLinks>
                    <SocialLink href="https://www.facebook.com/andre.rodrigues" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </SocialLink>
                    <SocialLink href="https://twitter.com/andre_rodrigues" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/andre-rodrigues" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </SocialLink>
                </SocialLinks>
                <FormContainer onSubmit={handleSubscribe}>
                    <InputField type="email" placeholder="Digite seu e-mail" required />
                    <SubmitButton type="submit">Inscrever-se</SubmitButton>
                </FormContainer>
                <LoginLink to="/login">Login na Plataforma</LoginLink>
                <FooterText>
                    &copy; {new Date().getFullYear()} André Laurentino Rodrigues. Todos os direitos reservados.
                </FooterText>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
