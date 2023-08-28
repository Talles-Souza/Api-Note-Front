import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function Profile () {

    return (

        <Container fluid>
            <Row style={{height: "5rem"}}>
                <Col style={{backgroundColor:"yellow"}}>1</Col>
                <Col style={{backgroundColor:"blue"}}>2</Col>
                <Col style={{backgroundColor:"orange"}}>3</Col>
            </Row>
        </Container>

    );


}

export default Profile;