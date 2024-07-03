import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #f3e6e5;
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
    margin-bottom: 20px;
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

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const InputField = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    flex: 1;
    margin-right: 10px;
`;

export const SubmitButton = styled.button`
    background-color: #55acee; 
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: #357ebd;
    }
`;

export const LoginLink = styled(Link)`
    color: #333;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
        color: #55acee;
    }
`;
