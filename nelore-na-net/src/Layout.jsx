import { Outlet } from "react-router-dom";
import Menu from "./Shared/Components/Menu";
import styled from "styled-components";
import Sidebar from "./Shared/Components/Sidebar";
import Footer from "./Shared/Components/Footer";
const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 6rem 0;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const Main = styled.main`
  @media (min-width: 768px) {
    width: 80%;
  }
`;

const Layout = () => {
  return (
    <section>
      <Menu />
      <LayoutContainer>
        <Main>
          <Outlet />
        </Main>
        <Sidebar />
      </LayoutContainer>
      <Footer />
    </section>
  );
};

export default Layout;
