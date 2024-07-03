import { Link } from 'react-router-dom'
import NeloreNaNet from '../../../assets/imgs/logo-nelore-na-net.png'
import { ButtonContainer, ContainerLinks, ContainerMenu, ContentMenu, ListMenu, LogoNeloreNaNet } from './style'

const Menu = () =>{
    return(
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
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/contato">Contato</Link>
                        </li>
                    </ListMenu>
                </ContainerLinks>
            </ContentMenu>
        </ContainerMenu>
    )
}

export default Menu;