import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
`;

const Title = styled.h2`
    color: #333;
    text-align: center;
`;

const QuoteList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const QuoteItem = styled.li`
    margin-bottom: 10px;
`;

const BovineQuotes = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await axios.get('https://api.hgbrasil.com/finance/stock_price?key=seuapikey&symbol=BEEF3');
                const boiGordoData = response.data.results.BEEF3;
                setQuote(boiGordoData);
            } catch (error) {
                console.error('Erro ao buscar cotações:', error);
            }
        };

        fetchQuote();
    }, []);

    return (
        <Container>
            {quote ? (
                <QuoteList>
                    <QuoteItem>Nome: {quote.name}</QuoteItem>
                    <QuoteItem>Cotação: R$ {quote.price}</QuoteItem>
                    <QuoteItem>Variação: {quote.change_percent}%</QuoteItem>
                    <QuoteItem>Data: {quote.updated_at}</QuoteItem>
                </QuoteList>
            ) : (
                <p>Carregando...</p>
            )}
        </Container>
    );
};

export default BovineQuotes;
