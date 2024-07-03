import BovineQuotes from "../BovineQuotes";
import { ContainerSidebar } from "./style";

const Sidebar = () => {
    return (
       <ContainerSidebar>
        <h2>Cotações</h2>
        <BovineQuotes />
        <h2>Arquivos</h2>
        <h2>Publicidade</h2>
       </ContainerSidebar>
    )
}

export default Sidebar;