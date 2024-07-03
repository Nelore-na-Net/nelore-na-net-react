import { Link } from 'react-router-dom'
import NeloreNaNet from '../../../assets/imgs/logo-nelore-na-net.png'
import { ButtonContainer, ContainerLinks, ContainerMenu, ContentMenu, ListMenu, LogoNeloreNaNet } from './style'

const Menu = () => {
    return (
        <ContainerMenu>
            <ContentMenu>
                <Link to="/">
                    <LogoNeloreNaNet src={NeloreNaNet} alt="Logo da Nelore na Net" />
                </Link>
                <ButtonContainer>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </ButtonContainer>
                <ContainerLinks>
                    <ListMenu>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/historia">Conheça a raça</Link>
                        </li>
                        <li>
                            <Link to="/cuidados">Cuidados</Link>
                        </li>
                        <li>
                            <Link to="/alimentacao">Alimentação</Link>
                        </li>
                        <li>
                            <Link to="/reproducao">Reprodução</Link>
                        </li>
                        <li>
                            <Link to="/galeria">Galeria</Link>
                        </li>
                        
                    </ListMenu>
                </ContainerLinks>
            </ContentMenu>
        </ContainerMenu>
    )
}

export default Menu;
