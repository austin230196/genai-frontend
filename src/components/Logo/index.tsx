import logo from "../../assets/logo.png"
import { LogoImg, LogoWrapper } from "./styles"


const Logo = () => {
    return (
        <LogoWrapper>
            <LogoImg src={logo} alt="Logo" />
        </LogoWrapper>
    )
}


export default Logo