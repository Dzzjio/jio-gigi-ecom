import logo from '../../assets/Images/61j6-CNsRpL._AC_SL1500_.jpg'
import { Link } from "react-router-dom";
import { ErrorPageContainer, ErrorPageContent, ErrorPageContentLeft, ErrorPageContentRight, SocMedias } from './styled';

const ErrorPage = () => {
    const isBlackBackground: boolean = false;
    
    return (
        <ErrorPageContainer className={isBlackBackground ? '' : 'white-background'}>
            <ErrorPageContent isBlackBackground>
                <h2>404</h2>
                <ErrorPageContentLeft>
                    <img src={logo} alt="logo-error-page" />
                    <SocMedias>
                    </SocMedias>
                </ErrorPageContentLeft>
                
                <ErrorPageContentRight>
                    <h3>OOPS!</h3>
                    <p>Oh, no! This page does not exist.</p>
                    <Link to='/'>GO TO HOME PAGE</Link>
                </ErrorPageContentRight>
            </ErrorPageContent>
        </ErrorPageContainer>

    )
}

export default ErrorPage