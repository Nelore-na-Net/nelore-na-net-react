import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
`;

const RowNewsHome = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
`;

const Col = styled.div`
  padding: 20px;
`;

export { Container, RowNewsHome, Col };
