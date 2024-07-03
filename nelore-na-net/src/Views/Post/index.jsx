import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../Shared/Components/Grids/style";

const Post = () => {
  const { slug } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const response = await fetch('/noticias.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar dados');
        }
        const data = await response.json();
        const foundNoticia = data.find(item => item.slug === slug);

        if (foundNoticia) {
          setNoticia(foundNoticia);
          setLoading(false);
        } else {
          throw new Error('Notícia não encontrada');
        }
      } catch (error) {
        console.error('Erro ao carregar notícia:', error);
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [slug]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!noticia) {
    return <div>Notícia não encontrada.</div>;
  }

  return (
    <Container>
      <h2>{noticia.title}</h2>
      <img src={noticia.imageUrl} alt={noticia.title} />
      <p>{noticia.description}</p>
      <p>{noticia.content}</p>
      <a href={noticia.link}>Voltar para as notícias</a>
    </Container>
  );
};

export default Post;
