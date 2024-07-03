import LogoNeloreNaNet from '../../../assets/imgs/logo-nelore-na-net.png'
import { ContainerMenu, ContentMenu } from './style'

const Menu = () =>{
    return(
        <ContainerMenu>
            <ContentMenu>
                <img src={LogoNeloreNaNet} alt="Logo da Nelore na Net" />
            </ContentMenu>
        </ContainerMenu>
    )
}