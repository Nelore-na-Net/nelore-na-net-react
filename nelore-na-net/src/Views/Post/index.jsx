import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ContentPost } from "./style";
import { Helmet } from "react-helmet";

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

  // Função para dividir o conteúdo em parágrafos separados
  const conteudoFormatado = post.conteudo.split("\n").map((item, index) => (
    <p key={index}>
      {item.trim()}
    </p>
  ));

  return (
    <ContentPost>
      <Helmet>
        <title>Nelore Na Net - {post.titulo}</title>
        <meta name="description" content={post.conteudo} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="Portuguese" />
        <meta name="author" content="Nelore Na Net" />
        <meta name="designer" content="Nelore Na Net" />
        {/* og */}
        <meta property="og:title" content={post.titulo} />
        <meta property="og:description" content={post.conteudo} />
        <meta property="og:image" content={post.imagem} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Blog" />
        <meta property="og:locale" content="pt_BR" />
        {/* article */}
        <meta property="article:published_time" content={post.data} />
        <meta property="article:author" content="Nelore Na Net" />
        <meta property="article:section" content={post.categoria} />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.titulo} />
        <meta name="twitter:description" content={post.conteudo} />
        <meta name="twitter:image" content={post.imagem} />
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:site" content="@nelorenanet" />
        <meta name="twitter:creator" content="@nelorenanet" />
        <meta name="twitter:label1" content="Nelore Na Net - " />
        <meta name="twitter:data1" content={post.categoria} />
        <meta name="twitter:label2" content="Publicado em" />
        <meta name="twitter:data2" content={post.data} />
      </Helmet>
      <article>
        <img src={post.imagem} alt={post.titulo} />
        <small>Crédito da imagem: {post.copyImagem}</small>
        <h2>{post.titulo}</h2>
        {conteudoFormatado}
      </article>
    </ContentPost>
  );
};

export default Post;
