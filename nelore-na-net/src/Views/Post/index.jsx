import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ContentPost } from "./style";

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/noticias.json")
      .then((response) => {
        const postEncontrado = response.data.find((n) => n.slug === slug);
        if (postEncontrado) {
          setPost(postEncontrado);
        } else {
          setError("Notícia não encontrada.");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar a notícia:", error);
        setError("Erro ao carregar a notícia. Tente novamente mais tarde.");
      });
  }, [slug]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Carregando...</p>;
  }

  return (
    <ContentPost>
      <article>
        <img src={post.imagem} alt={post.titulo} />
        <small>Credito da imagem: {post.copyImagem}</small>
        <h2>{post.titulo}</h2>
        <p>{post.conteudo}</p>
      </article>
    </ContentPost>
  );
};

export default Post;
