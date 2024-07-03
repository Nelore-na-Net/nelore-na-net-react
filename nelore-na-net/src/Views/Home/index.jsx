import React, { useEffect, useState } from "react";
import { Container, Col, RowNewsHome } from "../../Shared/Components/Grids/style";
import { Content } from "./style";
import NewsCard from "../../Shared/Components/NewsCard";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Faz a busca do JSON na pasta public
    fetch("/noticias.json")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Erro ao buscar as notícias:", error));
  }, []);

  return (
    <Content>
      <Container>
        <RowNewsHome>
          {news.map((item, index) => (
            <Col key={index}>
              <NewsCard
                image={item.imageUrl}
                title={item.title}
                description={item.description}
                link={`post/${item.slug}`}
              />
            </Col>
          ))}
        </RowNewsHome>
      </Container>
    </Content>
  );
};

export default Home;
