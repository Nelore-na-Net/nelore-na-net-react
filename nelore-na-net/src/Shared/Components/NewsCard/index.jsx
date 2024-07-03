import React from 'react';
import {
  CardContainer,
  ImageContainer,
  ContentContainer,
  Title,
  Description,
  ReadMoreLink
} from './style';

const NewsCard = ({ image, title, description, link }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ReadMoreLink to={link}>
          Leia mais
        </ReadMoreLink>
      </ContentContainer>
    </CardContainer>
  );
};

export default NewsCard;
