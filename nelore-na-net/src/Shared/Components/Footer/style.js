import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #fff;
    border-top: 1px solid rgb(51 51 51 / 20%);
    color: #333;
    padding: 20px 0;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoContainer = styled.div`
    margin-bottom: 20px;
`;

export const LogoImage = styled.img`
    width: 150px;
`;

export const FooterText = styled.p`
    font-size: 14px;
    text-align: center;
    margin-bottom: 20px;
`;

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
`;

export const SocialLink = styled.a`
    color: #333;
    text-decoration: none;
    font-size: 24px;
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
        color: #55acee;
    }

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }
`;

