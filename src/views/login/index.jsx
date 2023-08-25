import './style.css';
import TextFieldLogin from "../../components/form/textField/index.jsx";
import logo from '../../assets/register/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SignIn() {

    return (
        <Container className='container-global'>
            <Container id='container-sign-in'>
                <Row id='first-row'>
                    <Col id='top-col'>
                        <img src={logo} alt="" />
                        Welcome
                    </Col>
                </Row>
                <TextFieldLogin />
            </Container>
        </Container>
    );
}

export default SignIn;