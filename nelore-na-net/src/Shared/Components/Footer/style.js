import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #fff;
    color: #333;
    padding: 20px 0;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoContainer = styled.div`
    margin-bottom: 10px;
`;

export const LogoImage = styled.img`
    width: 190px;
`;

export const FooterText = styled.p`
    font-size: 14px;
    text-align: center;
`;

export const SocialLinks = styled.div`
    margin-top: 10px;
`;

export const SocialLink = styled.a`
    color: #333;
    text-decoration: none;
    margin: 0 10px;
    font-size: 16px;

    &:hover {
        text-decoration: underline;
    }
`;
