import { FooterWrapper } from "./styles";

const Footer = () => {
    return (
        <FooterWrapper>
            <p>AI Dev Studio</p>
            <span>|</span>
            <a>{new Date().getFullYear()}</a>
        </FooterWrapper>
    )
}


export default Footer;