import React, { useEffect, useState } from "react";
import { Container, ContainerSlide, Col, RowNewsHome } from "../../Shared/Components/Grids/style";
import { Content } from "./style";
import NewsCard from "../../Shared/Components/NewsCard";
import Carousel from "../../Shared/Components/Carousel";

const Home = () => {
  const [news, setNews] = useState([]);
  const [featuredNews, setFeaturedNews] = useState([]);

  useEffect(() => {
    fetch("/noticias.json")
      .then((response) => response.json())
      .then((data) => {
        setNews(data.filter(item => item.categoria === "noticias"));
        const featured = data.filter(item => item.categoria === "destaques");
        setFeaturedNews(featured);
      })
      .catch((error) => console.error("Erro ao buscar as notícias:", error));
  }, []);

  return (
    <Content>
      <Container>
        <ContainerSlide>
          <Carousel news={featuredNews} />
        </ContainerSlide>
        <RowNewsHome>
          {news.map((item) => (
            <Col key={item.id}>
              <NewsCard
                image={item.imagem}
                title={item.titulo}
                description={item.descricao}
                link={`/post/${item.slug}`}
              />
            </Col>
          ))}
        </RowNewsHome>
      </Container>
    </Content>
  );
};

export default Home;
