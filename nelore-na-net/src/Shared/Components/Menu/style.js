import styled from "styled-components";

const ContainerMenu = styled.nav`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const ContentMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const LogoNeloreNaNet = styled.img`
  height: 40px;
`;

const ButtonContainer = styled.div`
  display: block;
  button {
    background-color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    span{
      background-color: #fff;
      display: block;
      height: 2px;
      width: 25px;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const ContainerLinks = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ListMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  li{
    a{
      color: #333;
      display: block;
      font-size: 16px;
      font-weight: 600;
      padding: 10px 20px;
      text-decoration: none;
      &:hover{
        background-color: #ddd;
      }
    }
  }
`;

export {
  ButtonContainer,
  ContainerMenu,
  ContentMenu,
  LogoNeloreNaNet,
  ContainerLinks,
  ListMenu,
};
