import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 0 0 150px;
  height: 150px;
  margin-right: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

export const Description = styled.p`
  color: #555;
  margin: 8px 0;
`;

export const ReadMoreLink = styled(Link)`
  background-color: #F44336;
  border-radius: 4px;
  color: #fff;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 8px 16px;
  text-decoration: none;

  svg {
    margin-left: 8px;
  }

  &:hover {
    text-decoration: underline;
  }
`;
