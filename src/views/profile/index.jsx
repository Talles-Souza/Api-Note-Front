import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import { AuthenticationContext } from '../../service/context/Token';
import { useContext } from 'react';

function Profile() {

    const { user} = useContext(AuthenticationContext);

    return (

        <Container fluid style={{ display: "flex", justifyContent: "center", height: "100vh", backgroundColor: "var(--lilás)" }}>
            <Row className='box-profile'>
                <Col sm={4} className='avatar'></Col>
                <Col sm={8} className='box-info'>
                    <div className='box-card'>
                        <div className='card'>
                            <text className='info'>{user.name} </text>
                        </div>
                        <div className='card'>
                            <text className='info'>{user.email}</text>
                        </div>
                        <div className='card'>
                            <text className='info'>{user.linkedin}</text>
                        </div>
                        <div className='card'>
                            <text className='info'>{user.github}</text>
                        </div>
                    </div>
                    <button className='pw-btn'> alterar senha</button>
                </Col>

            </Row>
        </Container>
    );
}

export default Profile;